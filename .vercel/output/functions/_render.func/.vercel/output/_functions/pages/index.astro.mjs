/* empty css                                        */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, s as spreadAttributes, d as createAstro, F as Fragment } from '../chunks/astro/server_CurXskN5.mjs';
import 'kleur/colors';
import { $ as $$Container, P as PROJECTS, a as $$GitHub, b as $$Chrome, d as $$Html, e as $$Css, f as $$Javascript, g as $$Tailwind, h as $$Astro1, i as $$React, c as $$Layout } from '../chunks/Container_HqMLmE7F.mjs';
import 'clsx';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import React, { useState } from 'react';
import Typed from 'typed.js';
/* empty css                                 */
import Atropos from 'atropos/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
export { renderers } from '../renderers.mjs';

const $$IconDownload = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="css-i6dzq1 size-5" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/variable/IconDownload.astro", void 0);

const $$Docs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/variable/Docs.astro", void 0);

function MyComponent$5() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<span class='textoInfo'>Ingeniero de Sistemas</span>",
        "<span class='textoInfo'>Desarrollador Front-End</span>",
        "<span class='textoInfo'>Especialista en Marketing Estratégico</span>",
        "<span class='textoInfo'>Técnico en Sistemas e Informática</span>"
      ],
      // stringsElement: '#cadena-desarrolloF', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 20,
      // Velocidad en mlisegundos para poner una letra,
      startDelay: 100,
      // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 20,
      // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true,
      // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false,
      // Alterar el orden en el que escribe las palabras.
      backDelay: 1500,
      // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true,
      // Repetir el array de strings
      loopCount: false,
      // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true,
      // Mostrar cursor palpitanto
      cursorChar: "|",
      // Caracter para el cursor
      contentType: "html"
      // 'html' o 'null' para texto sin formato
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx("span", { ref: el }) });
}

const $$PersonalInformation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-tlnmwggr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col-reverse items-center md:flex-row md:gap-10 md:items-center h-full px-5 mt-5 mb-20" data-astro-cid-tlnmwggr> <div class="flex flex-col mt-12 text-[#D3D3D3] dark:text-[#012029]" data-astro-cid-tlnmwggr> <h2 class="text-2xl md:text-4xl items-start font-extrabold" data-astro-cid-tlnmwggr>
Neider Stith Nieto Rodriguez
</h2> <h5 class="text-xl my-3 font-extrabold" data-astro-cid-tlnmwggr> ${renderComponent($$result2, "Typed", MyComponent$5, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FeaturesTyped.js/Profesiones.jsx", "client:component-export": "default", "data-astro-cid-tlnmwggr": true })} </h5> <p class="font-extralight" data-astro-cid-tlnmwggr>
Soy un desarrollador frontend con experiencia en el diseño y desarrollo
        de sitios web. Me gusta mantenerme actualizado con las últimas
        tendencias y tecnologías en el mundo del desarrollo web, y siempre estoy
        buscando nuevas formas de mejorar mis habilidades y ampliar mis
        conocimientos.
</p> <p class="mb-10 mt-10 text-center md:text-left md:flex gap-5 font-extralight" data-astro-cid-tlnmwggr>
¡Espero tener la oportunidad de hablar contigo!
<a href="#contacto" class="relative" data-astro-cid-tlnmwggr> <span class="md:absolute -top-[4px] hover:shadow-sm hover:shadow-yellow-200 font-extrabold py-1 px-2
            hover:bg-slate-200 hover:scale-125 hover:-rotate-2 transition hover:text-[#012029]" data-astro-cid-tlnmwggr>Contáctame</span> </a> </p> <div class="flex flex-col justify-center items-center" data-astro-cid-tlnmwggr> <button class="download-button" data-astro-cid-tlnmwggr> <div class="docs px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold
        after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#fdc468] after:left-5 overflow-hidden
        after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all
        after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700
        [text-shadow:2px_4px_2px_#ffffff98;] hover:[text-shadow:1px_1px_1px_#fda4af] text-base" data-astro-cid-tlnmwggr> ${renderComponent($$result2, "Docs", $$Docs, { "data-astro-cid-tlnmwggr": true })}
Hoja de Vida
</div> <a class="download" href="/Hojadevida.pdf" download="Hoja de vida - Neider Nieto" data-astro-cid-tlnmwggr> ${renderComponent($$result2, "IconDownload", $$IconDownload, { "data-astro-cid-tlnmwggr": true })} </a> </button> <!-- <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        Hoja de Vida
      </span> --> </div> </div> <div class="image shadow-xl shadow-white dark:shadow-[#012029] bg-[#012029] dark:bg-white rounded-lg mb-14 h-56 w-40 md:h-72 md:w-[700px] lg:h-80 lg:w-[800px] mt-0 md:mt-10" data-astro-cid-tlnmwggr></div> </section> ` })} `;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/components/PersonalInformation.astro", void 0);

function App$2() {
  useState(false);
  return /* @__PURE__ */ jsx("div", { id: "app", children: /* @__PURE__ */ jsx(
    Atropos,
    {
      className: "my-atropos",
      shadow: true,
      highlight: true,
      shadowScale: 2,
      rotateTouch: true,
      rotate: true,
      rotateXMax: 50,
      rotateYMax: 50,
      children: /* @__PURE__ */ jsxs("div", { className: "image", "data-atropos-offset": "5", children: [
        /* @__PURE__ */ jsx("img", { className: " rounded-2xl", src: "img/imagen.webp ", alt: "" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute text-center flex flex-col text-xs md:text-xl items-center content-end bottom-0 p-1 md:p-10 mx-auto left-0 right-0 z-10 text-white", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-3xl font-extrabold mb-5", children: "Ingeniero de Sistemas" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base font-extralight", children: '"Primero aprende informática y toda la teoría.' }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base font-extralight", children: "Después desarrolla un estilo de programación." }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base font-extralight", children: 'Entonces, olvídalo todo y hackea"' }),
          /* @__PURE__ */ jsx("em", { className: "text-sm my-3 md:my-5", children: '"George Carrette"' })
        ] })
      ] })
    }
  ) });
}

const Modales = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const CloseMod = () => /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "size-10",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", "stroke-width": "0" }),
        /* @__PURE__ */ jsx(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ jsx(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z",
              fill: "#ff0000"
            }
          ),
          " "
        ] })
      ]
    }
  );
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: openModal,
        id: "openModal",
        className: "my-2 flex items-center mx-auto group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500\r\n             hover:border-gray-400 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500\r\n              hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8\r\n               hover:before:blur origin-left border-[2px] border-slate-200 dark:border-slate-400 transition\r\n                relative bg-[#012029] dark:bg-white dark:text-[#012029] h-10 w-52 border- text-left px-2 text-white text-base font-bold rounded-lg\r\n                overflow-hidden before:absolute before:w-12 before:h-8 before:content[''] before:right-1 before:top-1\r\n                before:z-10 before:bg-red-700 before:rounded-md before:blur-lg after:absolute after:z-10 after:w-20 after:h-8\r\n                 after:content[''] after:bg-yellow-400 after:right-8 after:top-1 after:rounded-full after:blur-lg",
        children: "Sobre Mí..."
      }
    ),
    isOpen && /* @__PURE__ */ jsx("article", { className: "modal is-open animate-blurred-fade-in", children: /* @__PURE__ */ jsxs("div", { className: "modal-container mx-28 mt-[50px] md:mt-0 mb-[50px] md:mb-0 md:mx-0 bg-slate-300 rounded-3xl", children: [
      /* @__PURE__ */ jsx("button", { className: "modal-close", onClick: closeModal, children: /* @__PURE__ */ jsx(CloseMod, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "flex mx-auto justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "mx-auto text-center mt-10 md:mt-12  text-slate-900 font-extrabold text-xl md:text-4xl md:mb-5 mb-2", children: "Sobre mi..." }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "size-28 md:size-32 mx-auto",
            src: "https://api.dicebear.com/8.x/adventurer/svg?seed=Coco",
            alt: "nature"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-slate-900 text-[10px] md:text-sm cursor-none", children: [
          "¡Hola! Mi nombre es ",
          /* @__PURE__ */ jsx("strong", { children: " Neider Nieto" }),
          ", Ingeniero de Sistemas con una inclinación especial hacia el desarrollo frontend. Desde que comencé en el mundo de la tecnología, he estado fascinado por la intersección entre la funcionalidad y la experiencia del usuario. Crear interfaces intuitivas y atractivas que mejoren la interacción del usuario es lo que me motiva a seguir aprendiendo y creciendo en esta disciplina."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-900 text-[10px] md:text-sm cursor-none", children: "Durante mi carrera, he trabajado en diversos proyectos que me han permitido perfeccionar mis habilidades en HTML, CSS, JavaScript y frameworks modernos como React y Astro. Me encanta transformar ideas en experiencias de usuario fluidas y accesibles, prestando atención a cada detalle para asegurar una navegación óptima y una excelente usabilidad." }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-slate-900 text-[10px] md:text-sm cursor-none italic mb-5", children: /* @__PURE__ */ jsx("i", { children: '"Mi objetivo es seguir creciendo como desarrollador frontend, contribuyendo con mis conocimientos y creatividad para construir aplicaciones web que no solo cumplan con los requisitos técnicos, sino que también superen las expectativas de los usuarios.""' }) })
      ] })
    ] }) })
  ] });
};

const $$Information = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-full border-orange-400 -z-1 mb-10 rounded-lg"> ${renderComponent($$result, "Atropos", App$2, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FeaturesFrameworks/Atropos.jsx", "client:component-export": "default" })} ${renderComponent($$result, "Modal", Modales, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/components/Modals.jsx", "client:component-export": "default" })} </section>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/components/Information.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="grids mt-5 text-center flex "> ${PROJECTS.slice(0, 3).map((project) => renderTemplate`<article class="relative before:absolute before:rounded-lg before:content before:bg-[var(--lineTop)] before:h-[5px] before:top-0 before:left-0 before:right-0 before:z-10
      after:absolute after:rounded-lg after:content after:bg-sky-500 after:h -[5px] after:bottom-0 after:left-0 after:right-0 after:z-10
       bg-[#D3D3D3] text-[#1d2029] overflow-hidden rounded-lg"> <div class="overflow-hidden hover:bg-gradient-to-b from-black"> <img class="h-44 w-full hover:scale-125 transition ease-in-out hover:animate-pulse object-center"${addAttribute(project.url, "src")}${addAttribute(`Imagen de ${project.title}`, "alt")}> </div> <div class="flex flex-col items-center text-balance p-5"> <h3 class="text-2xl font-black">${project.title}</h3> <span class="flex justify-between items-center gap-3 mt-3">${project.technologies.map((tecnology) => renderTemplate`<span${addAttribute(`flex flex-col justify-center items-center font-extrabold ${tecnology.class}`, "class")}> ${renderComponent($$result, "tecnology.icon", tecnology.icon, { "class": "size-5 hover:scale-125 transition cursor-crosshair icon" })} </span>`)} </span> <p class="mt-3 text-justify text-sm font-extralight">${project.text}</p> </div> <span${addAttribute(`badge ${project.badge === "Completed" ? "completed" : "in-progress"}`, "class")}>${project.badge}</span> <footer class="flex flex-row justify-center gap-5 mb-5"> <a${addAttribute(project.gh, "href")} target="_blank"> ${renderComponent($$result, "GitHub", $$GitHub, { "class": "h size-8 hover:scale-125 hover:filter hover:drop-shadow-lg transition cursor-pointer" })} </a> <a${addAttribute(project.page, "href")} target="_blank"> ${renderComponent($$result, "Chrome", $$Chrome, { "class": "h size-8 hover:scale-110 hover:filter hover:drop-shadow-lg hover:from-red-500 transition cursor-pointer " })} </a> </footer> </article>`)} </section> <a href="/MoreProjects" class="my-2 flex justify-between items-center mx-auto group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500
     hover:border-gray-400 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500
      hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8
       hover:before:blur origin-left border-[2px] border-slate-200 dark:border-slate-400 transition
        relative bg-[#012029] dark:bg-white dark:text-[#012029] h-10 w-52 border- text-left px-2 text-white text-base font-bold rounded-lg
        overflow-hidden before:absolute before:w-12 before:h-8 before:content[''] before:right-1 before:top-1
        before:z-10 before:bg-red-700 before:rounded-md before:blur-lg after:absolute after:z-10 after:w-20 after:h-8
         after:content[''] after:bg-yellow-400 after:right-8 after:top-1 after:rounded-full after:blur-lg">
Ver Más...
</a> `;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/components/Projects.astro", void 0);

const $$Astro$h = createAstro();
const $$Bootstrap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg" width="256" height="204" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Bootstrap.astro", void 0);

const $$Astro$g = createAstro();
const $$Sass = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Sass;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg" width="512" height="384"><path fill="#CF649A" d="M441 221c-18 0-34 4-47 10-5-9-9-17-10-24s-2-11-1-20 6-21 6-22c0 0-1-5-11-5-11 0-20 2-21 5l-4 15c-2 9-20 43-31 60-4-7-7-13-7-17-1-8-2-12-1-21s6-20 6-21-1-6-11-6c-11 0-20 2-21 5l-4 15-34 76-8 18c-2 4 0 0 0 1l-3 5-4 5s-1-7 1-16c3-19 12-49 12-51 0 0 2-5-6-8-7-3-9 2-10 2l-1 1s8-34-16-34c-14 0-35 17-45 31l-34 19-17 9-1-1c-29-31-82-52-79-93 0-15 6-54 101-102 79-39 141-28 152-4 16 34-33 97-115 106-31 3-47-9-51-13-4-5-5-5-7-4s-1 5 0 8c3 6 13 17 30 23 15 5 51 8 95-9 49-19 88-72 77-117-12-45-87-60-157-35-43 15-88 39-121 70-39 36-45 68-43 81 10 47 74 78 100 100l-3 2c-13 7-63 33-75 60-14 31 2 53 13 56 33 10 68-7 86-34 18-28 16-64 8-80l-1-1 11-6 18-10c-3 9-5 19-6 34-2 17 6 40 15 49 4 4 9 4 12 4 11 0 16-9 22-20l13-28s-8 41 13 41c7 0 15-9 18-14l1-1 1-2 20-37 25-57 5 20c2 8 7 16 10 24l-4 7-8 10c-10 12-23 26-24 30-2 5-2 8 2 11 3 2 8 2 13 2l18-4 17-9c10-7 16-18 15-32 0-7-3-15-6-22l3-4c16-23 28-49 28-49l5 21 9 20a89 89 0 0 0-27 36c-6 17-2 24 7 26 4 1 10-1 14-3 5-1 11-4 17-8 10-8 20-18 19-32 0-6-2-13-4-19 12-5 29-8 49-5 45 5 54 33 52 44-2 12-11 18-14 20l-4 4c1 2 2 2 5 2 3-1 23-10 24-31 1-28-25-58-71-57zM97 336c-14 16-35 23-44 17-9-5-6-29 13-46 11-10 25-20 34-26l9-5 1-1 3-1c6 24 0 45-16 62zm108-73c-5 13-16 45-22 43-6-1-9-26-2-50 4-12 13-26 18-32 8-9 17-12 19-8 3 5-10 39-13 47zm89 43-5 1v-2l16-17 9-11v1c0 14-14 24-20 28zm68-16c-2-1-1-5 4-16 2-5 7-13 15-20l2 9c0 18-13 24-21 27z"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Sass.astro", void 0);

const $$Astro$f = createAstro();
const $$Typescript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Typescript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"></path><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Typescript.astro", void 0);

const $$Astro$e = createAstro();
const $$NextJs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$NextJs;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"> <circle cx="90" cy="90" r="90" fill="black"></circle> </mask> <g mask="url(#mask0_408_139)"> <circle cx="90" cy="90" r="87" fill="black" stroke="white" stroke-width="6"></circle> <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"></path> <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"></rect> </g> <defs> <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/NextJs.astro", void 0);

const $$Astro$d = createAstro();
const $$NodeJs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$NodeJs;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 289" width="256" height="289" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z" fill="#539E43"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/NodeJs.astro", void 0);

const $$Astro$c = createAstro();
const $$Git = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"></path> </svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Git.astro", void 0);

const $$Astro$b = createAstro();
const $$Sql = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Sql;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 512 228"> <defs> <linearGradient x1="57.7%" y1="2%" x2="57.7%" y2="94.4%" id="a"> <stop stop-color="#97D9F6" offset="0%"></stop> <stop stop-color="#0F80CC" offset="92%"></stop> <stop stop-color="#0F80CC" offset="100%"></stop> </linearGradient> </defs> <path d="M194.5 112c-6.8 0-12.3 2-16.6 6.1-4.3 4-6.4 9.3-6.4 15.8a23.3 23.3 0 0 0 6.5 17c2.2 2.4 6.6 5.6 13.2 9.7 8 5 13.4 9 16 12 2.5 3.2 3.7 6.4 3.7 9.9 0 4.5-1.5 8.2-4.6 11a18 18 0 0 1-12.4 4 20.1 20.1 0 0 1-20.3-20.8h-2.5v22.9h2.5c.8-2.2 1.8-3.3 3.2-3.3.7 0 2.3.4 4.7 1.3 6 2.1 10.9 3.2 14.7 3.2a23 23 0 0 0 17-7 23.2 23.2 0 0 0 2.4-30.8c-3-4-9-8.6-18-14a59.5 59.5 0 0 1-15-11.3c-2.3-3-3.5-6.1-3.5-9.7 0-3.8 1.5-7 4.2-9.2 2.8-2.3 6.5-3.5 11-3.5 5.2 0 9.5 1.5 12.9 4.6 3.3 3 5.3 7.4 5.9 12.8h2.5V113h-2.3a6 6 0 0 1-.8 2c-.3.3-.7.4-1.4.4a17 17 0 0 1-4.3-1 38.6 38.6 0 0 0-12.3-2.3Zm82.4 0a44.6 44.6 0 0 0-39 22.2 43.5 43.5 0 0 0 4.5 50.2c7 8.2 15.3 13.3 25 15.3 2.1 1.1 5.3 4.1 9.4 9 4.7 5.3 8.6 9.3 11.9 11.6A35.6 35.6 0 0 0 311 227c5.3 0 10-.9 14-2.7l-.9-2.3a20.1 20.1 0 0 1-18.7-2.3c-3.6-2.5-8.3-7.1-13.8-14a47.6 47.6 0 0 0-5.4-6.1c10.6-2 19.3-7.2 26-15.4a42.8 42.8 0 0 0 10.2-28 42 42 0 0 0-13.2-31.4 44.8 44.8 0 0 0-32.4-12.9Zm51.4 0 .1 2.7c5.5 0 8.6 1.7 9.3 5 .3 1.1.4 3.3.4 6.4v59.6c0 4.5-.7 7.3-2 8.6-1.1 1.2-3.2 2-6.2 2.3l-.1 2.6h55.1l1.4-13.5h-2.5c-.7 3.7-2.3 6.3-5 7.8a30.5 30.5 0 0 1-14 2.3h-5.2c-6 0-9.5-2.2-10.5-6.6-.2-.9-.2-1.8-.2-2.8l.2-60.3c0-4.4.5-7.4 1.7-8.9 1.2-1.4 3.3-2.3 6.4-2.5l-.2-2.7h-28.7Zm-50.6 3.3a28 28 0 0 1 23 11.2 48 48 0 0 1 8.8 30.5c0 12.3-3 22.1-8.9 29.5a29 29 0 0 1-23.7 11c-9.5 0-17.2-3.8-23-11.4a47.1 47.1 0 0 1-8.9-29.6c0-12.5 3-22.5 9-30 5.9-7.5 13.8-11.2 23.7-11.2Zm126.9 12.8c-1.3 0-2.4.5-3.1 1.4-.8 1-1 2-.8 3.4a6 6 0 0 0 2.2 3.4c1.1 1 2.4 1.4 3.7 1.4 1.3 0 2.3-.5 3-1.4.7-1 1-2.1.7-3.4-.3-1.4-1-2.5-2-3.4a5.6 5.6 0 0 0-3.7-1.4Zm36.4 9.2c-2.3 8.8-7.3 13.5-14.9 14.3l.1 2.5h8.9l-.2 29.8c0 5.1.2 8.5.5 10.2 1 4.2 3.6 6.3 8.1 6.3 6.6 0 13.4-4 20.6-12l-2.2-1.8c-5.2 5.2-9.7 7.8-13.7 7.8-2.5 0-4-1.4-4.6-4.2l-.2-2.4v-33.7h13.7l-.2-4h-13.4v-12.8H441Zm52.4 11.2c-7.6 0-13.7 3.7-18.5 11a31.3 31.3 0 0 0-4.4 24.4 21 21 0 0 0 6.7 12.2 19 19 0 0 0 12.7 4.3c4.7 0 11.4-1.2 14.1-3.7 2.8-2.4 5.4-6.3 7.8-11.7l-2-2a20.6 20.6 0 0 1-17.1 10.5c-8 0-12.8-4.3-14.6-13l-.5-3.5a46 46 0 0 0 21.4-8c4.8-3.8 9.6-7.9 8.7-12.1a9.9 9.9 0 0 0-3.9-6c-2-1.6-7.4-2.4-10.4-2.4Zm-83 .3-16.3 3.8v2.9l5.7-.7c2.7 0 4.3 1.2 4.8 3.7.2.8.3 2 .4 3.4l-.2 26.8c0 3.7-.5 5.8-1.3 6.5-.8.6-3 1-6.6 1v2.5h25.9v-2.5c-3.7 0-6-.3-7-.9-1-.5-1.8-1.5-2.1-3-.2-1.2-.3-3.1-.4-5.7l.1-37.8h-3Zm78.9 5c1.6 0 3 .6 4.6 1.8a7 7 0 0 1 2.8 4c1.4 7-4.9 12-19 14.7a25 25 0 0 1 2.7-14.1c2.3-4.3 5.3-6.4 8.9-6.4Z" fill="#003B57"></path> <path d="M157.9 10H17C7.7 10 0 17.7 0 27v155.2c0 9.4 7.7 17.2 17.1 17.2h92.7c-1-46.2 14.7-135.7 48-189.5Z" fill="#0F80CC"></path> <path d="M152.8 15H17C10.5 15 5 20.4 5 27V171c30.7-11.8 76.8-22 108.7-21.5a989.7 989.7 0 0 1 39-134.5Z" fill="url(#a)"></path> <path d="M190.7 4.9c-9.6-8.6-21.3-5.2-32.8 5a81.4 81.4 0 0 0-5.1 5c-19.7 21-38 59.7-43.7 89.2a81.5 81.5 0 0 1 5.8 17.7l.8 3.5-.9-2.8a173.8 173.8 0 0 0-.8-2 172 172 0 0 0-6.4-12.1l-3.5 11c4.5 8.2 7.3 22.4 7.3 22.4l-1.4-4.1c-1-2.9-6-11.7-7.2-13.7-2 7.5-2.8 12.6-2.1 13.8 1.4 2.4 2.7 6.5 4 11a257.6 257.6 0 0 1 4.6 25c-.3 8.6-.1 17.6.5 25.7a91 91 0 0 0 4.7 24.8l1.5-.8a111 111 0 0 1-3.9-37c.9-22.5 6-49.5 15.6-77.7 16-42.5 38.4-76.6 58.8-93-18.6 17-43.8 71.4-51.4 91.6a365.7 365.7 0 0 0-18 64c6.2-19 26.4-27.2 26.4-27.2s9.8-12.2 21.4-29.6a210 210 0 0 0-22.1 6l-7.1 3s18.1-11 33.7-16C191 73.8 214.2 25.9 190.7 4.9" fill="#003B57"></path> </svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Sql.astro", void 0);

const $$Astro$a = createAstro();
const $$Python = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Python;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"></path> <defs> <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse"> <stop stop-color="#327EBD"></stop> <stop offset="1" stop-color="#1565A7"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFDA4B"></stop> <stop offset="1" stop-color="#F9C600"></stop> </linearGradient> </defs> </g></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Python.astro", void 0);

const $$Astro$9 = createAstro();
const $$Bun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Bun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 70"><path d="M71.09 20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46 26.46 0 0 1 75.5 35.7c0 16.57-16.82 30.05-37.5 30.05-11.58 0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55 65.3 30.14 69.75 42 69.75c20.68 0 37.5-13.48 37.5-30 0-7.06-3.04-13.75-8.41-19.01Z"></path><path d="M73 35.7c0 15.21-15.67 27.54-35 27.54S3 50.91 3 35.7C3 26.27 9 17.94 18.22 13S33.18 3 38 3s8.94 4.13 19.78 10C67 17.94 73 26.27 73 35.7Z" style="fill:#fbf0df"></path><path data-name="Bottom Shadow" d="M73 35.7a21.67 21.67 0 0 0-.8-5.78c-2.73 33.3-43.35 34.9-59.32 24.94A40 40 0 0 0 38 63.24c19.3 0 35-12.35 35-27.54Z" style="fill:#f6dece"></path><path data-name="Light Shine" d="M24.53 11.17C29 8.49 34.94 3.46 40.78 3.45A9.29 9.29 0 0 0 38 3c-2.42 0-5 1.25-8.25 3.13-1.13.66-2.3 1.39-3.54 2.15-2.33 1.44-5 3.07-8 4.7C8.69 18.13 3 26.62 3 35.7v1.19c6.06-21.41 17.07-23.04 21.53-25.72Z" style="fill:#fffefc"></path><path d="M35.12 5.53A16.41 16.41 0 0 1 29.49 18c-.28.25-.06.73.3.59 3.37-1.31 7.92-5.23 6-13.14-.08-.45-.67-.33-.67.08Zm2.27 0A16.24 16.24 0 0 1 39 19c-.12.35.31.65.55.36 2.19-2.8 4.1-8.36-1.62-14.36-.29-.26-.74.14-.54.49Zm2.76-.17A16.42 16.42 0 0 1 47 17.12a.33.33 0 0 0 .65.11c.92-3.49.4-9.44-7.17-12.53-.4-.16-.66.38-.33.62Zm-18.46 10.4a16.94 16.94 0 0 0 10.47-9c.18-.36.75-.22.66.18-1.73 8-7.52 9.67-11.12 9.45-.38.01-.37-.52-.01-.63Z" style="fill:#ccbea7;fill-rule:evenodd"></path><path d="M38 65.75C17.32 65.75.5 52.27.5 35.7c0-10 6.18-19.33 16.53-24.92 3-1.6 5.57-3.21 7.86-4.62 1.26-.78 2.45-1.51 3.6-2.19C32 1.89 35 .5 38 .5s5.62 1.2 8.9 3.14c1 .57 2 1.19 3.07 1.87 2.49 1.54 5.3 3.28 9 5.27C69.32 16.37 75.5 25.69 75.5 35.7c0 16.57-16.82 30.05-37.5 30.05ZM38 3c-2.42 0-5 1.25-8.25 3.13-1.13.66-2.3 1.39-3.54 2.15-2.33 1.44-5 3.07-8 4.7C8.69 18.13 3 26.62 3 35.7c0 15.19 15.7 27.55 35 27.55S73 50.89 73 35.7c0-9.08-5.69-17.57-15.22-22.7-3.78-2-6.73-3.88-9.12-5.36-1.09-.67-2.09-1.29-3-1.84C42.63 4 40.42 3 38 3Z"></path><g><path d="M45.05 43a8.93 8.93 0 0 1-2.92 4.71 6.81 6.81 0 0 1-4 1.88A6.84 6.84 0 0 1 34 47.71 8.93 8.93 0 0 1 31.12 43a.72.72 0 0 1 .8-.81h12.34a.72.72 0 0 1 .79.81Z" style="fill:#b71422" data-name="Background"></path><path data-name="Background" d="M34 47.79a6.91 6.91 0 0 0 4.12 1.9 6.91 6.91 0 0 0 4.11-1.9 10.63 10.63 0 0 0 1-1.07 6.83 6.83 0 0 0-4.9-2.31 6.15 6.15 0 0 0-5 2.78c.23.21.43.41.67.6Z" style="fill:#ff6164"></path><path data-name="Outline" d="M34.16 47a5.36 5.36 0 0 1 4.19-2.08 6 6 0 0 1 4 1.69c.23-.25.45-.51.66-.77a7 7 0 0 0-4.71-1.93 6.36 6.36 0 0 0-4.89 2.36 9.53 9.53 0 0 0 .75.73Z"></path><path data-name="Outline" d="M38.09 50.19a7.42 7.42 0 0 1-4.45-2 9.52 9.52 0 0 1-3.11-5.05 1.2 1.2 0 0 1 .26-1 1.41 1.41 0 0 1 1.13-.51h12.34a1.44 1.44 0 0 1 1.13.51 1.19 1.19 0 0 1 .25 1 9.52 9.52 0 0 1-3.11 5.05 7.42 7.42 0 0 1-4.44 2Zm-6.17-7.4c-.16 0-.2.07-.21.09a8.29 8.29 0 0 0 2.73 4.37A6.23 6.23 0 0 0 38.09 49a6.28 6.28 0 0 0 3.65-1.73 8.3 8.3 0 0 0 2.72-4.37.21.21 0 0 0-.2-.09Z"></path></g><g><ellipse data-name="Right Blush" cx="53.22" cy="40.18" rx="5.85" ry="3.44" style="fill:#febbd0"></ellipse><ellipse data-name="Left Bluch" cx="22.95" cy="40.18" rx="5.85" ry="3.44" style="fill:#febbd0"></ellipse><path d="M25.7 38.8a5.51 5.51 0 1 0-5.5-5.51 5.51 5.51 0 0 0 5.5 5.51Zm24.77 0A5.51 5.51 0 1 0 45 33.29a5.5 5.5 0 0 0 5.47 5.51Z" style="fill-rule:evenodd"></path><path d="M24 33.64a2.07 2.07 0 1 0-2.06-2.07A2.07 2.07 0 0 0 24 33.64Zm24.77 0a2.07 2.07 0 1 0-2.06-2.07 2.07 2.07 0 0 0 2.04 2.07Z" style="fill:#fff;fill-rule:evenodd"></path></g></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Bun.astro", void 0);

const $$Astro$8 = createAstro();
const $$Pnpm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Pnpm;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="76.58987244897958 44 164.00775510204068 164" width="160.01" height="160"><defs><path d="M237.6 95L187.6 95L187.6 45L237.6 45L237.6 95Z" id="b45vdTD8hs"></path><path d="M182.59 95L132.59 95L132.59 45L182.59 45L182.59 95Z" id="a40WtxIl8d"></path><path d="M127.59 95L77.59 95L77.59 45L127.59 45L127.59 95Z" id="h2CN9AEEpe"></path><path d="M237.6 150L187.6 150L187.6 100L237.6 100L237.6 150Z" id="dqv5133G8"></path><path d="M182.59 150L132.59 150L132.59 100L182.59 100L182.59 150Z" id="b1Lv79ypvm"></path><path d="M182.59 205L132.59 205L132.59 155L182.59 155L182.59 205Z" id="hy1IZWwLX"></path><path d="M237.6 205L187.6 205L187.6 155L237.6 155L237.6 205Z" id="akQfjxQes"></path><path d="M127.59 205L77.59 205L77.59 155L127.59 155L127.59 205Z" id="bdSrwE5pk"></path></defs><g><g><use xlink:href="#b45vdTD8hs" opacity="1" fill="#f9ad00" fill-opacity="1"></use></g><g><use xlink:href="#a40WtxIl8d" opacity="1" fill="#f9ad00" fill-opacity="1"></use></g><g><use xlink:href="#h2CN9AEEpe" opacity="1" fill="#f9ad00" fill-opacity="1"></use></g><g><use xlink:href="#dqv5133G8" opacity="1" fill="#f9ad00" fill-opacity="1"></use></g><g><use xlink:href="#b1Lv79ypvm" opacity="1" fill="#ffffff" fill-opacity="1"></use></g><g><use xlink:href="#hy1IZWwLX" opacity="1" fill="#ffffff" fill-opacity="1"></use></g><g><use xlink:href="#akQfjxQes" opacity="1" fill="#ffffff" fill-opacity="1"></use></g><g><use xlink:href="#bdSrwE5pk" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Pnpm.astro", void 0);

const $$Astro$7 = createAstro();
const $$Notion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Notion;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="268" preserveAspectRatio="xMidYMid" viewBox="0 0 256 268"><path fill="#FFF" d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Z"></path><path d="M164.09.608 16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608ZM69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585 52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404l35.84-2.087Z"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Notion.astro", void 0);

const $$Astro$6 = createAstro();
const $$ViteJs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViteJs;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="-0.5 0 257 257" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient x1="-0.828097821%" y1="7.6518539%" x2="57.6359644%" y2="78.4107719%" id="linearGradient-1"> <stop stop-color="#41D1FF" offset="0%"></stop> <stop stop-color="#BD34FE" offset="100%"></stop> </linearGradient> <linearGradient x1="43.3760053%" y1="2.24179788%" x2="50.3158848%" y2="89.0299051%" id="linearGradient-2"> <stop stop-color="#FFEA83" offset="0%"></stop> <stop stop-color="#FFDD35" offset="8.33333%"></stop> <stop stop-color="#FFA800" offset="100%"></stop> </linearGradient> </defs> <g> <path d="M255.152904,37.937763 L134.896865,252.97646 C132.413943,257.416178 126.035075,257.442321 123.5149,253.02417 L0.87443175,37.9584812 C-1.87111536,33.1438084 2.24595371,27.3119153 7.70191187,28.2871109 L128.086639,49.8052023 C128.854587,49.9424525 129.640835,49.9411454 130.408783,49.8012155 L248.276014,28.3179595 C253.713738,27.3268821 257.850198,33.1136134 255.152904,37.937763 Z" fill="url(#linearGradient-1)"></path> <path d="M185.432401,0.0631038902 L96.4393502,17.500942 C94.9766549,17.7875335 93.8936852,19.0270992 93.8054529,20.5146956 L88.3311293,112.971419 C88.2023755,115.149123 90.2023075,116.839261 92.3277254,116.349082 L117.10466,110.630976 C119.422882,110.096354 121.517582,112.138114 121.041128,114.469407 L113.67994,150.515893 C113.184532,152.941955 115.462232,155.016394 117.831433,154.29681 L133.134834,149.647295 C135.507302,148.927059 137.786963,151.00738 137.285019,153.435402 L125.586724,210.056351 C124.854723,213.598061 129.565674,215.529368 131.530313,212.49287 L132.842687,210.464834 L205.359174,65.745575 C206.573511,63.3224548 204.479465,60.5594769 201.818118,61.0730542 L176.31441,65.9952397 C173.91776,66.4573155 171.878614,64.2253653 172.555061,61.8805431 L189.2009,4.17570253 C189.878001,1.82692623 187.831665,-0.406957894 185.432401,0.0631038902 Z" fill="url(#linearGradient-2)"></path> </g> </g></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/ViteJs.astro", void 0);

const $$Astro$5 = createAstro();
const $$Linux = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Linux;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="27.77" height="32" viewBox="0 0 256 295"><defs><linearGradient id="logosLinuxTux0" x1="48.548%" x2="51.047%" y1="115.276%" y2="41.364%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux1" x1="54.407%" x2="46.175%" y1="2.404%" y2="90.542%"><stop offset="0%" stop-color="#FFF" stop-opacity=".8"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTux2" x1="51.86%" x2="47.947%" y1="88.248%" y2="9.748%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux3" x1="49.925%" x2="49.924%" y1="85.49%" y2="13.811%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux4" x1="53.901%" x2="45.956%" y1="3.102%" y2="93.895%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTux5" x1="45.593%" x2="54.811%" y1="5.475%" y2="93.524%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTux6" x1="49.984%" x2="49.984%" y1="89.845%" y2="40.632%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux7" x1="53.505%" x2="42.746%" y1="99.975%" y2="23.545%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux8" x1="49.841%" x2="50.241%" y1="13.229%" y2="94.673%"><stop offset="0%" stop-color="#FFF" stop-opacity=".8"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTux9" x1="49.927%" x2="50.727%" y1="37.327%" y2="92.782%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxa" x1="49.876%" x2="49.876%" y1="2.299%" y2="81.204%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxb" x1="49.833%" x2="49.824%" y1="2.272%" y2="71.799%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxc" x1="53.467%" x2="38.949%" y1="48.921%" y2="98.1%"><stop offset="0%" stop-color="#FFA63F"></stop><stop offset="100%" stop-color="#FF0"></stop></linearGradient><linearGradient id="logosLinuxTuxd" x1="52.373%" x2="47.579%" y1="143.009%" y2="-64.622%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTuxe" x1="30.581%" x2="65.887%" y1="34.024%" y2="89.175%"><stop offset="0%" stop-color="#FFA63F"></stop><stop offset="100%" stop-color="#FF0"></stop></linearGradient><linearGradient id="logosLinuxTuxf" x1="59.572%" x2="48.361%" y1="-17.216%" y2="66.118%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxg" x1="47.769%" x2="51.373%" y1="1.565%" y2="104.313%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxh" x1="43.55%" x2="57.114%" y1="4.533%" y2="92.827%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxi" x1="49.733%" x2="50.558%" y1="17.609%" y2="99.385%"><stop offset="0%" stop-color="#FFA63F"></stop><stop offset="100%" stop-color="#FF0"></stop></linearGradient><linearGradient id="logosLinuxTuxj" x1="50.17%" x2="49.68%" y1="2.89%" y2="94.17%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><filter id="logosLinuxTuxk" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"></feGaussianBlur></filter></defs><g fill="none"><path fill="#000" fill-opacity=".2" d="M235.125 249.359c0 17.355-52.617 31.497-117.54 31.497S.044 266.806.044 249.359c0-17.356 52.618-31.498 117.54-31.498c64.924 0 117.45 14.142 117.541 31.498" filter="url(#logosLinuxTuxk)" transform="translate(10)"></path><path fill="#000" d="M63.213 215.474c-11.387-16.346-13.591-69.606 12.947-102.39C89.292 97.383 92.69 86.455 93.7 71.67c.734-16.805-11.846-66.851 35.537-70.616c48.027-3.857 45.364 43.526 45.088 68.596c-.183 21.12 15.52 33.15 26.355 49.68c19.927 30.303 18.274 82.461-3.765 110.745c-27.916 35.354-51.791 20.018-67.678 21.304c-29.752 1.745-30.762 17.54-66.024-35.905"></path><path fill="url(#logosLinuxTux0)" d="M169.1 122.451c8.265 7.622 29.661 41.69-4.224 62.995c-11.937 7.438 10.653 35.721 21.488 22.039c19.193-24.61 6.98-63.913-4.591-77.963c-7.714-9.917-19.651-13.774-12.672-7.07" transform="translate(10)"></path><path fill="#000" stroke="#000" stroke-width=".977" d="M176.805 117.86c13.59 11.02 38.292 49.587 2.204 74.748c-11.846 7.806 10.468 32.508 23.049 19.927c43.618-43.894-1.102-94.308-16.53-111.664c-13.774-15.151-25.987 3.49-8.723 16.989z"></path><path fill="url(#logosLinuxTux1)" d="M147.245 25.02c-.459 12.581-14.325 23.51-30.946 24.52c-16.621 1.01-29.66-8.54-29.202-21.121c.46-12.581 14.326-23.509 30.947-24.519c16.62-.918 29.66 8.54 29.201 21.12" transform="translate(10)"></path><path fill="url(#logosLinuxTux2)" d="M107.483 54.957c.46 8.173-3.397 15.06-8.723 15.335c-5.326.276-10.01-6.06-10.469-14.233c-.459-8.173 3.398-15.06 8.724-15.335c5.326-.276 10.01 6.06 10.468 14.233" transform="translate(10)"></path><path fill="url(#logosLinuxTux3)" d="M117.125 55.6c.184 9.458 6.337 16.988 13.683 16.805c7.346-.184 13.131-7.99 12.948-17.54c-.184-9.458-6.336-16.988-13.683-16.804c-7.346.183-13.223 8.08-12.948 17.539" transform="translate(10)"></path><path fill="#000" d="M133.186 57.712c-.092 5.234 2.48 9.458 5.877 9.458c3.306 0 6.153-4.224 6.245-9.366c.091-5.234-2.48-9.459-5.878-9.459c-3.397 0-6.152 4.225-6.244 9.367m-21.212.092c.459 4.316-1.194 7.989-3.582 8.356c-2.387.276-4.683-2.938-5.142-7.254c-.46-4.316 1.194-7.99 3.581-8.357c2.388-.275 4.684 2.939 5.143 7.255"></path><path fill="url(#logosLinuxTux4)" d="M124.564 54.773c-.276 2.939 1.102 5.326 3.03 5.51c1.928.184 3.765-2.112 4.04-4.959c.276-2.938-1.102-5.326-3.03-5.51c-1.928-.183-3.765 2.113-4.04 4.96" transform="translate(10)"></path><path fill="url(#logosLinuxTux5)" d="M99.953 55.508c.276 2.388-.734 4.5-2.203 4.683c-1.47.184-2.847-1.653-3.123-4.132c-.275-2.388.735-4.5 2.204-4.683c1.47-.184 2.847 1.744 3.122 4.132" transform="translate(10)"></path><path fill="url(#logosLinuxTux6)" d="M71.027 145.684c6.52-14.785 20.386-40.772 20.662-60.883c0-15.978 47.843-19.835 51.7-3.856c3.856 15.978 13.59 39.853 19.834 51.424c6.245 11.478 24.335 48.118 5.051 80.074c-17.356 28.284-69.973 50.69-98.073-3.856c-9.55-18.917-7.806-42.333.826-62.903" transform="translate(10)"></path><path fill="url(#logosLinuxTux7)" d="M65.15 134.664c-5.601 10.56-17.172 38.293 11.112 53.445c30.395 16.162 30.303 49.312-6.245 33.517c-33.425-14.233-18.641-71.902-9.274-85.676c6.06-9.642 15.243-21.488 4.407-1.286" transform="translate(10)"></path><path fill="#000" stroke="#000" stroke-width="1.25" d="M79.925 122.727c-8.907 14.509-30.211 48.669-1.652 66.484c38.384 23.6 27.548 47.108-7.53 25.895c-49.404-29.568-5.97-89.257 13.774-112.03c22.59-25.529 4.316 4.683-4.592 19.65z"></path><path fill="url(#logosLinuxTux8)" d="M156.428 151.285c0 16.162-15.519 37.1-42.15 36.916c-27.456.183-39.118-20.754-39.118-36.916c0-16.161 18.182-29.293 40.588-29.293c22.498.092 40.68 13.132 40.68 29.293" transform="translate(10)"></path><path fill="url(#logosLinuxTux9)" d="M141.92 100.504c-.276 16.713-11.204 20.662-24.978 20.662c-13.775 0-23.784-2.48-24.978-20.662c0-11.387 11.203-17.998 24.978-17.998c13.774-.092 24.977 6.52 24.977 17.998" transform="translate(10)"></path><path fill="url(#logosLinuxTuxa)" d="M58.63 126.216c9-13.682 28.008-34.711 3.582 2.939c-19.835 31.038-7.346 50.965-.918 56.474c18.549 16.53 17.814 27.64 3.214 18.917c-31.314-18.641-24.794-50.047-5.878-78.33" transform="translate(10)"></path><path fill="url(#logosLinuxTuxb)" d="M188.936 131.818c-7.806-16.07-32.6-56.842 1.193-9.459c30.763 42.884 9.183 72.729 5.326 75.667c-3.856 2.939-16.804 8.908-13.04-1.469c3.858-10.377 22.958-30.028 6.52-64.74" transform="translate(10)"></path><path fill="url(#logosLinuxTuxc)" stroke="#E68C3F" stroke-width="6.25" d="M51.835 258.542c-20.57-10.928-50.414 2.112-39.578-27.457c2.204-6.704-3.214-16.805.275-23.325c4.133-7.989 13.04-6.244 18.366-11.57c5.234-5.51 8.54-15.06 18.366-13.59c9.734 1.468 16.254 13.406 23.049 28.099c5.05 10.468 22.865 25.253 21.672 37.007c-1.47 17.998-21.948 21.396-42.15 10.836z" transform="translate(10)"></path><path fill="url(#logosLinuxTuxd)" d="M201.608 189.119c-3.122 5.877-16.162 15.335-24.886 12.856c-8.815-2.388-12.856-15.795-11.111-25.988c1.653-11.386 11.111-12.03 23.05-6.336c12.855 6.336 16.712 11.662 12.947 19.468" transform="translate(10)"></path><path fill="url(#logosLinuxTuxe)" stroke="#E68C3F" stroke-width="6.251" d="M194.445 253.49c15.06-18.273 48.578-14.508 25.988-39.577c-4.775-5.418-3.306-16.989-9.183-21.947c-6.887-6.061-14.509-1.102-21.488-4.224c-6.979-3.398-14.325-9.918-22.865-5.327c-8.54 4.684-9.459 16.805-10.285 32.783c-.735 11.479-11.203 30.671-5.602 41.231c8.081 16.346 29.11 14.142 43.435-2.938z" transform="translate(10)"></path><path fill="url(#logosLinuxTuxf)" d="M187.925 229.064c23.325-34.435 5.97-34.16.092-36.823c-5.877-2.755-12.03-8.173-18.916-4.408c-6.888 3.857-7.255 13.775-7.439 26.814c-.275 9.367-8.08 25.07-3.397 33.793c5.693 10.193 19.467-4.591 29.66-19.376" transform="translate(10)"></path><path fill="url(#logosLinuxTuxg)" d="M47.06 234.023c-34.895-22.59-18.55-30.303-13.315-33.885c6.336-4.591 6.428-13.407 14.233-12.58c7.806.826 12.397 10.468 17.631 22.406c3.857 8.54 17.264 19.927 16.254 29.753c-1.285 11.57-19.743 3.948-34.803-5.694" transform="translate(10)"></path><path fill="#000" d="M209.588 188.843c-2.755 4.776-13.958 12.306-21.396 10.285c-7.622-1.928-11.112-12.672-9.55-20.753c1.377-9.183 9.55-9.642 19.834-5.05c10.928 4.958 14.326 9.182 11.112 15.518"></path><path fill="url(#logosLinuxTuxh)" d="M192.058 186.18c-1.745 3.306-9.091 8.54-14.234 7.163c-5.142-1.377-7.713-8.815-6.887-14.417c.735-6.336 6.244-6.704 13.223-3.581c7.53 3.49 9.918 6.428 7.898 10.835" transform="translate(10)"></path><path fill="url(#logosLinuxTuxi)" stroke="#E68C3F" stroke-width="3.75" d="M97.107 66.344c3.673-3.398 12.58-13.774 29.477-2.939c3.122 2.02 5.693 2.204 11.662 4.775c12.03 4.96 6.336 16.897-6.52 20.937c-5.51 1.745-10.468 8.449-20.386 7.806c-8.54-.46-10.744-6.06-15.978-9.091c-9.275-5.234-10.652-12.305-5.602-16.07c5.051-3.765 6.98-5.143 7.347-5.418z" transform="translate(10)"></path><path stroke="#E68C3F" stroke-width="2.5" d="M148.43 75.986c-5.05.275-15.979 11.203-27.457 11.203c-11.479 0-18.366-10.652-20.11-10.652"></path><path fill="url(#logosLinuxTuxj)" d="M102.8 65.426c1.837-1.653 7.622-6.153 15.244-1.562c1.653.919 3.306 1.929 5.693 3.306c4.867 2.847 2.48 6.98-3.398 9.55c-2.663 1.102-7.07 3.49-10.376 3.306c-3.673-.367-6.153-2.755-8.54-4.316c-4.5-2.938-4.224-5.418-2.112-7.346c1.56-1.47 3.305-2.847 3.49-2.938" transform="translate(10)"></path></g></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Linux.astro", void 0);

const $$Astro$4 = createAstro();
const $$MarkDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MarkDown;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 208 128" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path fill="#000" stroke="currentColor" stroke-width="10" d="M15 5h178a10 10 0 0 1 10 10v98a10 10 0 0 1-10 10H15a10 10 0 0 1-10-10V15A10 10 0 0 1 15 5z"></path><path fill="currentColor" d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39H30zm125 0-30-33h20V30h20v35h20l-30 33z"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/MarkDown.astro", void 0);

const $$Astro$3 = createAstro();
const $$Wordpress = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Wordpress;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 122.52 122.523" width="512" height="512" xmlns="http://www.w3.org/2000/svg"><g fill="#21759b"><path d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z"></path><path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z"></path><path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z"></path><path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z"></path><path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z"></path></g></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Wordpress.astro", void 0);

const $$Astro$2 = createAstro();
const $$Php1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Php1;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 100 50"><path fill="#7B87B8" d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Php1.astro", void 0);

const $$Astro$1 = createAstro();
const $$Vercel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Vercel;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 222" width="256" height="222" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#f2f2f2" d="m128 0 128 221.705H0z"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Vercel.astro", void 0);

const $$Astro = createAstro();
const $$Java = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Java;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 346"> <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"></path> <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"></path> <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"></path> <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"></path> <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"></path> </svg>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/icons/Tecnologys/Java.astro", void 0);

const TOOLS = [
  {
    logo: $$Html,
    name: "HTML",
    category: "Lenguaje de Marcado"
  },
  {
    logo: $$Css,
    name: "CSS",
    category: "Lenguaje de hojas de estilo"
  },
  {
    logo: $$Javascript,
    name: "Javascript",
    category: "Lenguaje de programación"
  },
  {
    logo: $$Tailwind,
    name: "TAILWIND",
    category: "Framework de utilidades CSS"
  },
  {
    logo: $$Astro1,
    name: "Astro",
    category: "Framework de desarrollo web"
  },
  {
    logo: $$React,
    name: "React",
    category: "Biblioteca y framework frontend"
  },
  {
    logo: $$NextJs,
    name: "NextJs",
    category: "Framework de desarrollo web"
  },
  {
    logo: $$Git,
    name: "Git",
    category: "Sistema de control de versiones"
  },
  {
    logo: $$GitHub,
    name: "GitHub",
    category: "Plataforma alojamiento código"
  },
  {
    logo: $$Typescript,
    name: "Typescript",
    category: "Lenguajes de programación"
  },
  {
    logo: $$Sass,
    name: "SASS",
    category: "Preprocesador de CSS"
  },
  {
    logo: $$Bootstrap,
    name: "Bootstrap",
    category: "Frameworks de componentes CSS"
  },
  {
    logo: $$NodeJs,
    name: "NodeJs",
    category: "Entorno de ejecución"
  },
  {
    logo: $$Linux,
    name: "Linux",
    category: "Sistema Operativo Linux"
  },
  {
    logo: $$Sql,
    name: "Sql Lite",
    category: "Bases de datos relacionales"
  },
  {
    logo: $$Python,
    name: "Python",
    category: "Lenguaje de programación"
  },
  {
    logo: $$ViteJs,
    name: "Vite Js",
    category: "Empaquetador de JavaScript"
  },
  {
    logo: $$Notion,
    name: "Notion",
    category: "Gestión de proyectos"
  },
  {
    logo: $$Java,
    name: "Java",
    category: "Lenguaje de programación"
  },
  {
    logo: $$Bun,
    name: "Bun",
    category: "Gestor de dependencias"
  },
  {
    logo: $$MarkDown,
    name: "MarkDown",
    category: "Lenguajes de marcado"
  },
  {
    logo: $$Php1,
    name: "Php",
    category: "Lenguajes de programación"
  },
  {
    logo: $$Wordpress,
    name: "Wordpress",
    category: "Sistema de gestión de contenido"
  },
  {
    logo: $$Vercel,
    name: "Vercel",
    category: "Alojamiento en la nube"
  }
];

const $$Tecnologys = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Crear un evento hover donde en cada tecnologia me muestre los frameworks o dividir por secciones las tecnologias -->${maybeRenderHead()}<section class="grids pt-6 pb-14" data-astro-cid-easehubd> ${TOOLS.map((tool) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-easehubd": true }, { "default": ($$result2) => renderTemplate` <div class="a group  relative flex flex-col items-center p-3 hover:scale-110 transition hover:shadow-xl hover:shadow-slate-200 cursor-crosshair" data-astro-cid-easehubd> <h2 class="text-[12px] text-center py-2 dark:text-[#012029] text-slate-100 font-normal" data-astro-cid-easehubd> ${tool.category} </h2> ${renderComponent($$result2, "tool.logo", tool.logo, { "class": "size-14 icon ", "data-astro-cid-easehubd": true })} <span class="absolute -top-6 left-[5%] -translate-x-[50%] 
          z-20 origin-left scale-0 px-3 rounded-lg border 
          border-gray-300 bg-white py-2 text-[#012029] text-sm font-bold
          shadow-md transition-all duration-300 ease-in-out 
          group-hover:scale-100" data-astro-cid-easehubd> ${tool.name} </span> </div> ` })}`)} </section> `;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/components/Tecnologys.astro", void 0);

function App$1() {
  const [subscribe, setSubscribe] = useState(true);
  const alert = () => {
    toast.success("¡ Me pondré en contacto contigo !", {
      position: "top-center",
      className: "foo-bar",
      // transition: Zoom,
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark"
    });
    setSubscribe(!subscribe);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        id: "button",
        type: "submit",
        onClick: alert,
        className: "w-fit m-auto text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:red-cyan-800 rounded-lg text-sm px-5 py-2.5 text-center mb-2 font-extrabold",
        children: subscribe ? "Enviar Formulario" : "Formulario Enviado"
      }
    ),
    /* @__PURE__ */ jsx(ToastContainer, {})
  ] });
}

function ContactForm() {
  const [state, setState] = useState({
    names: "",
    email: "",
    tel: "",
    grupocontacto: false,
    grupocontacto2: false,
    message: ""
  });
  const ThumbsDown = () => /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-thumb-down-filled cursor-pointer",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13 21.008a3 3 0 0 0 2.995 -2.823l.005 -.177v-4h2a3 3 0 0 0 2.98 -2.65l.015 -.173l.005 -.177l-.02 -.196l-1.006 -5.032c-.381 -1.625 -1.502 -2.796 -2.81 -2.78l-.164 .008h-8a1 1 0 0 0 -.993 .884l-.007 .116l.001 9.536a1 1 0 0 0 .5 .866a2.998 2.998 0 0 1 1.492 2.396l.007 .202v1a3 3 0 0 0 3 3z",
            "stroke-width": "0",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5 14.008a1 1 0 0 0 .993 -.883l.007 -.117v-9a1 1 0 0 0 -.883 -.993l-.117 -.007h-1a2 2 0 0 0 -1.995 1.852l-.005 .15v7a2 2 0 0 0 1.85 1.994l.15 .005h1z",
            "stroke-width": "0",
            fill: "currentColor"
          }
        )
      ]
    }
  );
  const ThumbsUp = () => /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-thumb-up-filled cursor-pointer",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z",
            "stroke-width": "0",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z",
            "stroke-width": "0",
            fill: "currentColor"
          }
        )
      ]
    }
  );
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === "radio" ? checked : value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://formsubmit.co/nestnidev17@gmail.com",
        state
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: "flex flex-col",
      id: "form",
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 mb-6 md:grid-cols-1", children: /* @__PURE__ */ jsxs("div", { className: "relative z-0", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "names",
              autocomplete: "off",
              type: "text",
              id: "floating_standard",
              className: "block py-2.5 px-0 w-full text-sm text-slate-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#012029] dark:border-[#012029] dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer",
              placeholder: " ",
              required: true,
              value: state.names,
              onChange: handleChange
            }
          ),
          /* @__PURE__ */ jsx(
            "label",
            {
              for: "floating_standard",
              className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:peer-focus:dark:text-orange-600 peer-focus:dark:font-extrabold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
              children: "Nombres"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 mb-6 md:grid-cols-1", children: /* @__PURE__ */ jsxs("div", { className: "relative z-0", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "email",
              autocomplete: "off",
              type: "email",
              id: "floating_standard",
              className: "block py-2.5 px-0 w-full text-sm text-slate-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#012029] dark:border-[#012029] dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer",
              placeholder: " ",
              value: state.email,
              onChange: handleChange
            }
          ),
          /* @__PURE__ */ jsx(
            "label",
            {
              for: "floating_standard",
              className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:peer-focus:dark:text-orange-600 peer-focus:dark:font-extrabold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
              children: "Correo Electrónico"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 mb-6 md:grid-cols-1", children: /* @__PURE__ */ jsxs("div", { className: "relative z-0", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "tel",
              autocomplete: "off",
              type: "tel",
              id: "floating_standard",
              className: "block py-2.5 px-0 w-full text-sm text-slate-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#012029] dark:border-[#012029] dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer",
              placeholder: " ",
              required: true,
              value: state.tel,
              onChange: handleChange
            }
          ),
          /* @__PURE__ */ jsx(
            "label",
            {
              for: "floating_standard",
              className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:peer-focus:dark:text-orange-600 peer-focus:dark:font-extrabold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
              children: "Teléfono"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 mb-6 md:grid-cols-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-extrabold text-center", children: "¿TE GUSTÓ EL PORTAFOLIO?" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-10 py-0", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                className: "hover:text-green-500 hover:scale-[1.7] transition ease-in-out delay-200",
                for: "telefono-radio",
                children: /* @__PURE__ */ jsx(ThumbsUp, {})
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                name: "grupocontacto",
                checked: state.grupocontacto,
                onChange: handleChange,
                hidden: true
              }
            ),
            /* @__PURE__ */ jsx(
              "label",
              {
                className: "hover:text-red-500 hover:scale-[1.7] transition ease-in-out delay-200",
                for: "correo-radio",
                children: /* @__PURE__ */ jsx(ThumbsDown, {})
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                name: "grupocontacto2",
                checked: state.grupocontacto2,
                onChange: handleChange,
                hidden: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 mb-6 md:grid-cols-1", children: /* @__PURE__ */ jsxs("div", { className: "relative z-0", children: [
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "message",
              id: "floating_standard",
              className: "block py-2.5 px-0 w-full text-sm text-slate-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#012029] dark:border-[#012029] dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer",
              placeholder: " ",
              required: true,
              value: state.message,
              onChange: handleChange
            }
          ),
          /* @__PURE__ */ jsx(
            "label",
            {
              for: "floating_standard",
              className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-7 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:peer-focus:dark:text-orange-600 peer-focus:dark:font-extrabold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
              children: "Comentarios"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(App$1, {})
      ]
    }
  );
}
function App() {
  return /* @__PURE__ */ jsx(ContactForm, {});
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <Container> -->${maybeRenderHead()}<section class="grid grid-cols-1 md:grid-cols-2 justify-items-center justify-content flex-1 m-10 dark:text-[#012029]"> <picture class="col-span-1"> <img class="size-72 hidden md:block md:size-full" src="/img/ImgContact.svg" alt=""> </picture> <fieldset class="w-96 md:w-full col-span-1 border-2 p-10 rounded-3xl border-slate-300 px-10 flex-1"> <legend class="px-8 uppercase text-white-900/50 font-semibold text-[#9c9891]">Contáctame</legend> <!-- action="https://formspree.io/f/mkndrbdo" method="POST"  --> ${renderComponent($$result, "FormSpree", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/components/FeaturesFrameworks/FormSpree", "client:component-export": "default" })} </fieldset> </section> <!-- </Container> -->`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/components/Contact.astro", void 0);

function MyComponent$4() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#cadena-texto-proyectos",
      // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75,
      // Velocidad en mlisegundos para poner una letra,
      startDelay: 300,
      // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75,
      // Velocidad en milisegundos para borrrar una letra,
      // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false,
      // Alterar el orden en el que escribe las palabras.
      backDelay: 1500,
      // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true,
      // Repetir el array de strings
      loopCount: false,
      // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true,
      // Mostrar cursor palpitanto
      cursorChar: "|",
      // Caracter para el cursor
      contentType: "html"
      // 'html' o 'null' para texto sin formato
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx("span", { ref: el }) });
}

function MyComponent$3() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#cadena-texto-tecnologias",
      // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75,
      // Velocidad en mlisegundos para poner una letra,
      startDelay: 300,
      // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75,
      // Velocidad en milisegundos para borrrar una letra,
      // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false,
      // Alterar el orden en el que escribe las palabras.
      backDelay: 1500,
      // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true,
      // Repetir el array de strings
      loopCount: false,
      // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true,
      // Mostrar cursor palpitanto
      cursorChar: "|",
      // Caracter para el cursor
      contentType: "html"
      // 'html' o 'null' para texto sin formato
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx("span", { ref: el }) });
}

function MyComponent$2() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#cadena-texto",
      // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75,
      // Velocidad en mlisegundos para poner una letra,
      startDelay: 300,
      // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75,
      // Velocidad en milisegundos para borrrar una letra,
      // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false,
      // Alterar el orden en el que escribe las palabras.
      backDelay: 1500,
      // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true,
      // Repetir el array de strings
      loopCount: false,
      // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true,
      // Mostrar cursor palpitanto
      cursorChar: "|",
      // Caracter para el cursor
      contentType: "html"
      // 'html' o 'null' para texto sin formato
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx("span", { ref: el }) });
}

function MyComponent$1() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#cadena-texto-contacto",
      // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75,
      // Velocidad en mlisegundos para poner una letra,
      startDelay: 300,
      // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75,
      // Velocidad en milisegundos para borrrar una letra,
      // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false,
      // Alterar el orden en el que escribe las palabras.
      backDelay: 1500,
      // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true,
      // Repetir el array de strings
      loopCount: false,
      // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true,
      // Mostrar cursor palpitanto
      cursorChar: "|",
      // Caracter para el cursor
      contentType: "html"
      // 'html' o 'null' para texto sin formato
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx("span", { ref: el }) });
}

function MyComponent() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#cadena-texto-experiencia",
      // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75,
      // Velocidad en mlisegundos para poner una letra,
      startDelay: 300,
      // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75,
      // Velocidad en milisegundos para borrrar una letra,
      // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false,
      // Alterar el orden en el que escribe las palabras.
      backDelay: 1500,
      // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true,
      // Repetir el array de strings
      loopCount: false,
      // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true,
      // Mostrar cursor palpitanto
      cursorChar: "|",
      // Caracter para el cursor
      contentType: "html"
      // 'html' o 'null' para texto sin formato
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx("span", { ref: el }) });
}

const WORKS = [
  {
    id: 1,
    title: "Docente de Técnico en Sistemas",
    subtitle: "IFE COLOMBIA",
    date: "Febrero 2023 - Actualmente",
    text: "Diseñé y desarrollé planes de estudio innovadores para el técnico en sistemas, manteniendo el material didáctico actualizado a las nuevas tendencias",
    text2: "Impartí clases teórico y prácticas sobre temas clave como diseño web, fundamentos de programación (java, python, js), sistemas operativos, Microsoft Office y bases de datos, utilizando métodos pedagógicos efectivos para garantizar una comprensión profunda por parte de los estudiantes",
    direction: "left"
  },
  {
    id: 2,
    title: "Freelancer",
    subtitle: "Diseño de páginas web",
    date: "Actualmente",
    text: "Diseñé y desarrollé sitios web personalizados para una variedad de clientes, utilizando tecnologías como HTML, CSS, JS, ASTRO y REACT cumpliendo con las expectativas del cliente y los plazos de entrega.",
    text2: "Implementé soluciones de diseño responsivo para garantizar una experiencia óptima del usuario en dispositivos móviles y de escritorio.",
    direction: "right"
  },
  {
    id: 3,
    title: "Asesor y Cajero",
    subtitle: "Banco Agrario de Colombia",
    date: "2017 - 2018",
    text: "Procesé transacciones de depósito, retiro y transferencia con precisión y eficiencia, manteniendo la integridad financiera",
    text2: "Fomenté la confianza y la lealtad del cliente a través de interacciones positivas y asesoramiento financiero básico.",
    direction: "left"
  }
];

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto w-full h-full"> <div class="relative wrap overflow-hidden p-10 h-full"> <div class="border-0 md:border-2 absolute md:border-opacity-20 md:border-gray-700 h-full left-[50%]"></div> <!-- right timeline --> ${WORKS.map((work) => renderTemplate`<div${addAttribute(`mb-4 md:flex md:justify-between md:items-center w-full hover:scale-105 transition ${work.direction === "right" ? "" : "md:flex-row-reverse left-timeline"}`, "class")}> <div class="order-1 md:w-5/12"></div> <div class="z-20 mb-2 flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"> <h1 class="mx-auto text-white font-semibold text-xl">${work.id}</h1> </div> <div${addAttribute(`order-1 rounded-lg shadow-xl md:w-5/12 px-6 py-4 ${work.direction === "right" ? "bg-gray-400" : "bg-red-400"}`, "class")}> <h1 class="mx-auto text-white font-semibold text-xl"> ${work.title} </h1> <h3 class="mb-3 font-bold text-white text-sm inline"> ${work.subtitle} </h3> <span class="mx-2">|</span> <span class="mx-auto font-semibold text-xs text-white"> ${work.date} </span> <ul class="list-disc"> <li> <p class="mt-2 text-xs font-extralight text-white"> ${work.text} </p> </li> <li> <p class="text-xs font-extralight text-white">${work.text2}</p> </li> </ul> </div> </div>`)} </div> </div>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/components/Experience.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio - Neider | Donde la Creatividad se Encuentra con la Tecnolog\xEDa.", "description": "\xA1Bienvenido a mi portfolio! En Neider, fusiono la creatividad con la tecnolog\xEDa para ofrecerte soluciones innovadoras y visualmente impactantes. Descubre c\xF3mo mis habilidades en dise\xF1o y desarrollo se combinan para crear experiencias \xFAnicas y memorables. Explora mi trabajo y d\xE9jate inspirar por la sinergia entre la imaginaci\xF3n y la tecnolog\xEDa en cada proyecto." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PersonalInformation", $$PersonalInformation, {})} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<span class="uppercase text-white my-3 text-xl font-bold dark:text-[#012029]">${renderComponent($$result3, "TypedInfo", MyComponent$2, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FeaturesTyped.js/Informaci\xF3nCarrera.jsx", "client:component-export": "default" })}</span> <div class="uppercase my-3 text-xl font-bold" id="cadena-texto"> <h2 class="dark:text-[#012029] text-white my-3 text-xl font-bold">
información sobre mi <span class="text-orange-500">carrera</span> </h2> </div> ${renderComponent($$result3, "Information", $$Information, {})} ` })} ${renderComponent($$result2, "Container", $$Container, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <span class="uppercase text-white my-3 text-xl font-bold dark:text-[#012029]">${renderComponent($$result3, "TypedProjects", MyComponent$4, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FeaturesTyped.js/Proyectos.jsx", "client:component-export": "default" })}</span> <div class="" id="cadena-texto-proyectos"> <h2 class="mb-20">
Mis Proyectos <span class="text-orange-500">Realizados</span> </h2> </div> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <span class="uppercase text-white my-3 text-xl font-bold dark:text-[#012029]">${renderComponent($$result3, "TypedExperience", MyComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FeaturesTyped.js/Experiencia.jsx", "client:component-export": "default" })}</span> <div class="" id="cadena-texto-experiencia"> <h2 class="mb-20">
Está es mi experiencia <span class="text-orange-500">Personal</span> </h2> </div> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "Container", $$Container, { "id": "habilidades" }, { "default": ($$result3) => renderTemplate` <span class="uppercase text-white my-3 text-xl font-bold dark:text-[#012029]">${renderComponent($$result3, "TypedTecnologys", MyComponent$3, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FeaturesTyped.js/Tecnolog\xEDas.jsx", "client:component-export": "default" })}</span> <div class="" id="cadena-texto-tecnologias"> <h2 class="">
Técnologias que he <span class="text-orange-500">UTILIZADO</span> </h2> </div> ${renderComponent($$result3, "Tecnologys", $$Tecnologys, {})} ` })} ${renderComponent($$result2, "Container", $$Container, { "id": "contacto" }, { "default": ($$result3) => renderTemplate` <span class="uppercase text-white my-3 text-xl font-bold dark:text-[#012029]">${renderComponent($$result3, "TypedContacto", MyComponent$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FeaturesTyped.js/Contacto.jsx", "client:component-export": "default" })}</span> <div class="" id="cadena-texto-contacto"> <h2 class="">
Aqui me puedes <span class="text-orange-500">CONTACTAR</span> </h2> </div> ${renderComponent($$result3, "Contact", $$Contact, {})} ` })} ` })}`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/pages/index.astro", void 0);

const $$file = "C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
