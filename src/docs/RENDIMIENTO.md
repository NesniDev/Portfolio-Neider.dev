# Analisis de Rendimiento - Portfolio Neider

Fecha: 2026-07-22
URL analizada: `http://localhost:4321`
Herramienta: Chrome DevTools Performance Trace

---

## Metricas Obtenidas

| Metrica | Valor | Estado |
|---------|-------|--------|
| LCP (Largest Contentful Paint) | 99 ms | Excelente |
| CLS (Cumulative Layout Shift) | 0.00 | Perfecto |
| TTFB (Time to First Byte) | 7 ms | Excelente |
| Total de requests | 56 | Alto |
| Cadena critica mas larga | 140 ms | Aceptable |

---

## Problemas Identificados

### 1. Supabase JS cargado en bundle principal (~722 KB)

**Archivo afectado:** `src/components-landing/react/tabs/Contact.jsx`

```javascript
import { supabase } from "../../lib/supabaseClient.js"; // Linea 1
```

**Problema:** `@supabase/supabase-js` se importa estaticamente al inicio, cargando 722 KB al bundle principal aunque el usuario solo lo necesita cuando envia el formulario de contacto.

**Cadena de dependencias:**
- `Contact.jsx` → `supabaseClient.js` → `@supabase/supabase-js` (722 KB)
- Esto bloquea la cadena critica hasta 140 ms

**Solucion propuesta:**

```javascript
// Contact.jsx - Import dinamico
const sendForm = async (data) => {
  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY
  );
  // ... enviar formulario
};
```

O usar `client:only="react"` para que solo se hidrate en el cliente y se cargue bajo demanda.

**Ahorro estimado:** ~722 KB del bundle inicial

---

### 2. Framer-motion completo en bundle (~442 KB)

**Archivo afectado:** `src/components-landing/react/BarRight.tsx`

```typescript
import { motion } from "framer-motion"; // Linea 2
```

**Problema:** Se importa toda la libreria de framer-motion (442 KB) cuando solo se usan animaciones basicas con `<motion.div>`.

**Solucion propuesta (opcion A - CSS puro):**

Reemplazar `motion.div` por transiciones CSS:

```tsx
// BarRight.tsx - Sin framer-motion
<div className="transition-all duration-300 ease-in-out opacity-0 translate-y-2 animate-fadeIn">
  {/* contenido */}
</div>
```

```css
/* global.css */
@keyframes fadeIn {
  to {
    opacity: 1;
    translate: 0 0;
  }
}
```

**Solucion propuesta (opcion B - import selectivo):**

```typescript
import { motion } from "framer-motion/dist/es/m";
// O usar bundle externo mas pequeno
```

**Ahorro estimado:** ~442 KB

---

### 3. canvas-confetti en bundle principal

**Archivo afectado:** `src/components-landing/react/tabs/Contact.jsx`

```javascript
import confetti from "canvas-confetti"; // Linea 3
```

**Problema:** Se carga `canvas-confetti` en el bundle inicial, pero solo se usa cuando el usuario envia el formulario exitosamente.

**Solucion propuesta:**

```javascript
// Contact.jsx
const handleSubmit = async () => {
  // ... enviar formulario

  if (success) {
    const confetti = (await import("canvas-confetti")).default;
    confetti({ particleCount: 100, spread: 70 });
  }
};
```

**Ahorro estimado:** ~50 KB del bundle inicial

---

### 4. Preconnects innecesarios a Google Fonts

**Archivo afectado:** `src/pages/index.astro` (o LayoutLanding.astro)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

**Problema:** Las fuentes se cargan localmente via `@fontsource-variable/fira-code` y `@fontsource-variable/jetbrains-mono`. Estos preconnects crean conexiones TCP innecesarias (2 requests extra).

**Solucion propuesta:** Eliminar ambos `<link rel="preconnect">` del HTML.

**Ahorro estimado:** 2 requests, ~2 RTT de conexion

---

### 5. Sin compresion en respuestas HTML

**Request:** `GET http://localhost:4321/`

**Headers observados:**
```
content-type: text/html
transfer-encoding: chunked
```

**Problema:** No hay header `Content-Encoding: gzip` o `br`. El HTML se transfiere sin comprimir.

**Solucion propuesta:** Configurar compresion en `astro.config.mjs`:

```javascript
import压缩 from "@astrojs/compress";

export default defineConfig({
  integrations: [压缩()],
});
```

O confiar en la compresion automatica de Vercel en produccion.

---

### 6. 56 requests en initial load

**Detalle de requests por tipo:**
- HTML: 1
- CSS: 6 (styles por componente)
- JS: 35+ (React, Vite deps, componentes)
- Fuentes: 2
- Imagenes: 4
- Otros: 8

**Problema:** Todos los tabs de React (Profile, Skills, Projects, Experience, Contact, Index) se cargan simultaneamente en el initial load, aunque el usuario solo ve uno.

**Solucion propuesta - Lazy loading por tabs:**

```jsx
// Tabs.jsx
import { lazy, Suspense } from "react";

const Profile = lazy(() => import("./tabs/Profile.jsx"));
const Skills = lazy(() => import("./tabs/Skills.jsx"));
const Projects = lazy(() => import("./tabs/Projects.jsx"));
const Experience = lazy(() => import("./tabs/Experience.jsx"));
const Contact = lazy(() => import("./tabs/Contact.jsx"));

export default function Tabs({ activeTab }) {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      {activeTab === "profile" && <Profile />}
      {activeTab === "skills" && <Skills />}
      {/* ... */}
    </Suspense>
  );
}
```

**Ahorro estimado:** ~60% menos JS en initial load

---

## Resumen de Mejoras

| # | Problema | Ahorro | Prioridad | Dificultad |
|---|----------|--------|-----------|------------|
| 1 | Supabase JS eager load | ~722 KB | Alta | Baja |
| 2 | Framer-motion completo | ~442 KB | Alta | Media |
| 3 | canvas-confetti eager | ~50 KB | Media | Baja |
| 4 | Preconnects innecesarios | 2 requests | Media | Baja |
| 5 | Sin compresion HTML | ~70% reduccion | Baja | Baja |
| 6 | Tabs sin lazy loading | ~60% menos JS | Alta | Media |

**Total de ahorro potencial:** ~1.2 MB menos en initial load

---

## Implementacion Sugerida (orden de prioridad)

### Fase 1 - Quick wins (1-2 horas)

1. Eliminar preconnects a Google Fonts
2. Dynamic import de `canvas-confetti` en `Contact.jsx`
3. Dynamic import de `@supabase/supabase-js` en `supabaseClient.js`

### Fase 2 - Optimizaciones medias (2-4 horas)

4. Reemplazar framer-motion por CSS transitions en `BarRight.tsx`
5. Implementar lazy loading en los tabs de React

### Fase 3 - Optimizaciones avanzadas (opcional)

6. Configurar compresion en Vercel/Astro
7. Analizar splitting de chunks de Vite
8. Implementar prefetch de tabs criticos

---

## Notas Adicionales

- En **desarrollo** (Vite dev), las metricas no son representativas de produccion. El bundle se sirve sin minificar ni optimizar.
- En **produccion** (Vercel), Vite aplica tree-shaking, minificacion y code splitting automaticamente.
- Ejecutar `npm run build` para ver el tamano real de los bundles en produccion.
- Usar `npm run preview` para simular produccion localmente.
