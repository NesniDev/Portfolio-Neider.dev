import 'cookie';
import { a1 as bold, a2 as red, a3 as yellow, a4 as dim, a5 as blue } from './chunks/astro_CWaOgyKP.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

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
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.10.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/index.DXsWtuOD.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\";@import\"https://fonts.cdnfonts.com/css/caviar-dreams\";:root{--letterTitle: \"Playpen Sans\", system-ui, sans-serif;--letterParagrah: \"Caviar Dreams\", system-ui, sans-serif}html{font-family:var(--letterParagrah);scroll-behavior:smooth}body{background-color:#012029;display:flex;flex-direction:column;min-height:100vh}@media (prefers-color-scheme: dark){body{color:#ffffffe6}}@media (prefers-color-scheme: light){body{color:#012029}}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cb_N2MEh.js"}],"styles":[{"type":"external","src":"/_astro/index.DXsWtuOD.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"},{"type":"external","src":"/_astro/index.Vrf1qhFY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/neider_nieto/Desktop/Web/portfolio Neider/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/neider_nieto/Desktop/Web/portfolio Neider/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.10.0/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_3pz1MTcH.mjs","/src/pages/index.astro":"chunks/pages/index_C50FXg58.mjs","\u0000@astrojs-manifest":"manifest_CzV7ef-e.mjs","C:/Users/neider_nieto/Desktop/Web/portfolio Neider/node_modules/.pnpm/@astrojs+react@3.5.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1_vite@5.2.13/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.10.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BkohZbar.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_B4VXIk0w.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Bhp9ZreG.mjs","@/components/FeaturesTyped.js/InformaciónCarrera.jsx":"_astro/InformaciónCarrera.C-T7Qo8u.js","/astro/hoisted.js?q=0":"_astro/hoisted.Cb_N2MEh.js","@/components/FeaturesTyped.js/Proyectos.jsx":"_astro/Proyectos.0f1b8JoE.js","@/components/FeaturesTyped.js/Profesiones.jsx":"_astro/Profesiones.DRlcTE79.js","@/components/FeaturesTyped.js/Tecnologías.jsx":"_astro/Tecnologías.BcrOtg5L.js","@/components/FeaturesTyped.js/Experiencia.jsx":"_astro/Experiencia.iiid9lzd.js","@/components/FeaturesTyped.js/Contacto.jsx":"_astro/Contacto.Dz2btRr-.js","@/components/FeaturesFrameworks/Atropos.jsx":"_astro/Atropos.Gowx4Uvk.js","/astro/hoisted.js?q=1":"_astro/hoisted.DZL4CV8D.js","C:/Users/neider_nieto/Desktop/Web/portfolio Neider/src/components/FeaturesFrameworks/FormSpree":"_astro/FormSpree.VV_kbbjd.js","@astrojs/react/client.js":"_astro/client.VBMNy0j7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.Vrf1qhFY.css","/_astro/index.DXsWtuOD.css","/Hojadevida.pdf","/robots.txt","/img/artex.avif","/img/bar.avif","/img/Error404.avif","/img/Foto.webp","/img/imagen.webp","/img/ImgContact.svg","/img/JavaScript-logo.avif","/img/Lawyer.webp","/img/Logo.svg","/img/LogoNeider.avif","/img/rick and morty.avif","/img/x.jpg","/_astro/Atropos.Gowx4Uvk.js","/_astro/client.VBMNy0j7.js","/_astro/Contacto.Dz2btRr-.js","/_astro/Experiencia.iiid9lzd.js","/_astro/FormSpree.VV_kbbjd.js","/_astro/hoisted.Cb_N2MEh.js","/_astro/hoisted.DZL4CV8D.js","/_astro/index.BTGsrsBX.css","/_astro/index.DlAYGZ0P.js","/_astro/InformaciónCarrera.C-T7Qo8u.js","/_astro/jsx-runtime.Cw0dS1eS.js","/_astro/Profesiones.DRlcTE79.js","/_astro/Proyectos.0f1b8JoE.js","/_astro/Tecnologías.BcrOtg5L.js","/_astro/typed.module.exEGtOgn.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
