import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_KatD2fN5.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_CurXskN5.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Neider/Documents/Github/P%C3%A1ginasWeb/Portfolio-Neider.dev/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/MoreProjects.C50V6SkG.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\";@import\"https://fonts.cdnfonts.com/css/caviar-dreams\";.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--letterTitle: \"Playpen Sans\", system-ui, sans-serif;--letterParagrah: \"Caviar Dreams\", system-ui, sans-serif}html{font-family:var(--letterParagrah);scroll-behavior:smooth}body{background-color:#012029;display:flex;flex-direction:column;min-height:100vh}@media (prefers-color-scheme: dark){body{color:#ffffffe6}}@media (prefers-color-scheme: light){body{color:#012029}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const o=document.querySelector(\"#menu\"),a=document.querySelector(\".button\"),r=document.querySelectorAll(\"#menu a\"),s=document.querySelector(\"#open__hamburguer\"),n=document.querySelector(\"#close__hamburguer\");a.addEventListener(\"click\",()=>{o.classList.toggle(\"hidden\"),o.classList.toggle(\"nav__overlay--show\"),s.classList.toggle(\"opacity-0\"),s.classList.toggle(\"scale-0\"),n.classList.toggle(\"opacity-100\"),n.classList.toggle(\"scale-100\"),r.forEach(e=>{e.addEventListener(\"click\",()=>{o.classList.add(\"hidden\")})})});const c=()=>{const t=typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\";t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\"),window.localStorage.setItem(\"theme\",t)},d=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const t=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",t?\"dark\":\"light\")},l=()=>{const e=document.getElementById(\"themeToggle\");e?.replaceWith(e?.cloneNode(!0)),document.getElementById(\"themeToggle\")?.addEventListener(\"click\",d)};c();l();document.addEventListener(\"astro:after-swap\",()=>{c(),l()});window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\",c);\n"}],"styles":[{"type":"external","src":"/_astro/MoreProjects.C50V6SkG.css"},{"type":"external","src":"/_astro/MoreProjects.BS-_2mz5.css"},{"type":"inline","content":".h:hover{filter:drop-shadow(0 0 6px rgba(0,100,100,.8))}.icon:hover{filter:drop-shadow(0 0 6px rgb(255,155,6))}.grids{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:20px}.badge{display:inline-flex;border-radius:10px;padding:5px 7px;font-size:10px;box-shadow:1px 1px 5px #2df800;color:#000;background-image:linear-gradient(110deg,#2df800,45%,#fff,55%,#2df800);background-size:250% 100%;animation:backgroundAnimate 2s linear infinite;font-weight:bolder;margin-bottom:15px}@keyframes backgroundAnimate{0%{background-position:0 0}to{background-position:200% 0}}.in-progress{background-image:linear-gradient(110deg,#f6af35,45%,#fff,55%,#f6af35);color:#000;box-shadow:1px 1px 5px #f6af35}\n"}],"routeData":{"route":"/moreprojects","isIndex":false,"type":"page","pattern":"^\\/MoreProjects\\/?$","segments":[[{"content":"MoreProjects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/MoreProjects.astro","pathname":"/MoreProjects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const o=document.querySelector(\"#menu\"),a=document.querySelector(\".button\"),r=document.querySelectorAll(\"#menu a\"),s=document.querySelector(\"#open__hamburguer\"),n=document.querySelector(\"#close__hamburguer\");a.addEventListener(\"click\",()=>{o.classList.toggle(\"hidden\"),o.classList.toggle(\"nav__overlay--show\"),s.classList.toggle(\"opacity-0\"),s.classList.toggle(\"scale-0\"),n.classList.toggle(\"opacity-100\"),n.classList.toggle(\"scale-100\"),r.forEach(e=>{e.addEventListener(\"click\",()=>{o.classList.add(\"hidden\")})})});const c=()=>{const t=typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\";t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\"),window.localStorage.setItem(\"theme\",t)},d=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const t=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",t?\"dark\":\"light\")},l=()=>{const e=document.getElementById(\"themeToggle\");e?.replaceWith(e?.cloneNode(!0)),document.getElementById(\"themeToggle\")?.addEventListener(\"click\",d)};c();l();document.addEventListener(\"astro:after-swap\",()=>{c(),l()});window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\",c);\n"}],"styles":[{"type":"external","src":"/_astro/MoreProjects.C50V6SkG.css"},{"type":"external","src":"/_astro/MoreProjects.BS-_2mz5.css"},{"type":"external","src":"/_astro/index.Ca3pVNqF.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/pages/MoreProjects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/MoreProjects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/MoreProjects@_@astro":"pages/moreprojects.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_js5cUIL8.mjs","@/components/FeaturesTyped.js/InformaciónCarrera.jsx":"_astro/InformaciónCarrera.C-T7Qo8u.js","@/components/FeaturesTyped.js/Proyectos.jsx":"_astro/Proyectos.0f1b8JoE.js","@/components/FeaturesTyped.js/Experiencia.jsx":"_astro/Experiencia.iiid9lzd.js","@/components/FeaturesTyped.js/Tecnologías.jsx":"_astro/Tecnologías.BcrOtg5L.js","@/components/FeaturesTyped.js/Contacto.jsx":"_astro/Contacto.Dz2btRr-.js","@/components/FeaturesTyped.js/Profesiones.jsx":"_astro/Profesiones.DRlcTE79.js","@/components/FeaturesFrameworks/Atropos.jsx":"_astro/Atropos.Gowx4Uvk.js","C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/components/Modals.jsx":"_astro/Modals.BV86eJOA.js","C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/components/FeaturesFrameworks/FormSpree":"_astro/FormSpree.BubjD1ag.js","@astrojs/react/client.js":"_astro/client.VBMNy0j7.js","/astro/hoisted.js?q=0":"_astro/hoisted.Cv_fu9ET.js","/astro/hoisted.js?q=1":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/MoreProjects.C50V6SkG.css","/_astro/MoreProjects.BS-_2mz5.css","/_astro/index.Ca3pVNqF.css","/google3c9f7d6e016fd04c.html","/Hojadevida.pdf","/robots.txt","/sitemap.xml","/fonts/CaviarDreams.ttf","/fonts/CaviarDreams_Bold.ttf","/fonts/CaviarDreams_BoldItalic.ttf","/fonts/CaviarDreams_Italic.ttf","/img/API.avif","/img/artex.avif","/img/bar.avif","/img/ecommerce.png","/img/Error404.avif","/img/Foto.webp","/img/imagen.webp","/img/ImgContact.svg","/img/JavaScript-logo.avif","/img/Lawyer.webp","/img/Logo.svg","/img/LogoNeider.avif","/img/x.jpg","/_astro/Atropos.Gowx4Uvk.js","/_astro/client.VBMNy0j7.js","/_astro/Contacto.Dz2btRr-.js","/_astro/Experiencia.iiid9lzd.js","/_astro/FormSpree.BubjD1ag.js","/_astro/hoisted.2daoxv0f.js","/_astro/index.B3-1UXnU.css","/_astro/index.DlAYGZ0P.js","/_astro/InformaciónCarrera.C-T7Qo8u.js","/_astro/jsx-runtime.Cw0dS1eS.js","/_astro/Modals.BV86eJOA.js","/_astro/Profesiones.DRlcTE79.js","/_astro/Proyectos.0f1b8JoE.js","/_astro/Tecnologías.BcrOtg5L.js","/_astro/typed.module.exEGtOgn.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"tNH+I3tnBx7p0iUPLMgOdAJs4/Ix3u7wlGgkcMPvq7w=","experimentalEnvGetSecretEnabled":false});

export { manifest };
