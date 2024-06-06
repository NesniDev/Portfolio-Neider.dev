import 'cookie';
import { T as bold, V as red, W as yellow, X as dim, Y as blue } from './chunks/astro_ChJLnC3Y.mjs';
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
  return toPath;
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.3.6_@types+node@16.18.11_lightningcss@1.23.0_typescript@4.9.5/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.d5SvEsfa.js"}],"styles":[{"type":"external","src":"/_astro/index.5GruqpFE.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"},{"type":"external","src":"/_astro/index.Vrf1qhFY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/index.5GruqpFE.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\";@import\"https://fonts.cdnfonts.com/css/caviar-dreams\";:root{--letterTitle: \"Playpen Sans\", system-ui, sans-serif;--letterParagrah: \"Caviar Dreams\", system-ui, sans-serif}html{font-family:var(--letterParagrah);scroll-behavior:smooth}body{background-color:#012029;display:flex;flex-direction:column;min-height:100vh}@media (prefers-color-scheme: dark){body{color:#ffffffe6}}@media (prefers-color-scheme: light){body{color:#012029}}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/neider_nieto/Desktop/Web/portfolio Neider/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/neider_nieto/Desktop/Web/portfolio Neider/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.3.6_@types+node@16.18.11_lightningcss@1.23.0_typescript@4.9.5/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DfRuGJQq.mjs","/src/pages/index.astro":"chunks/pages/index_CX8rQwS8.mjs","\u0000@astrojs-manifest":"manifest_CQuEMpQY.mjs","C:/Users/neider_nieto/Desktop/Web/portfolio Neider/node_modules/.pnpm/@astrojs+react@3.0.10_@types+react-dom@18.2.19_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_vite@5.1.1/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.3.6_@types+node@16.18.11_lightningcss@1.23.0_typescript@4.9.5/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_D7Azf5qD.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BVV8ha1O.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_CbHqNIGF.mjs","@/components/FeaturesTyped.js/Tecnologías.jsx":"_astro/Tecnologías.dJXeWYFE.js","/astro/hoisted.js?q=0":"_astro/hoisted.d5SvEsfa.js","@/components/FeaturesTyped.js/Contacto.jsx":"_astro/Contacto.D-UWU7eD.js","@/components/FeaturesTyped.js/Profesiones.jsx":"_astro/Profesiones.Cf1ab0rr.js","@/components/FeaturesTyped.js/Experiencia.jsx":"_astro/Experiencia.BebNWjfJ.js","@/components/FeaturesTyped.js/InformaciónCarrera.jsx":"_astro/InformaciónCarrera.DVEG5Kiw.js","@/components/FeaturesTyped.js/Proyectos.jsx":"_astro/Proyectos.CkwXITsn.js","@/components/FeaturesFrameworks/Atropos.jsx":"_astro/Atropos.5vQ5P6Oi.js","/astro/hoisted.js?q=1":"_astro/hoisted.DqR2iBSn.js","C:/Users/neider_nieto/Desktop/Web/portfolio Neider/src/components/FeaturesFrameworks/FormSpree":"_astro/FormSpree.C5xIl77L.js","@astrojs/react/client.js":"_astro/client.DagFyh-q.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.Vrf1qhFY.css","/_astro/index.5GruqpFE.css","/Hojadevida.pdf","/robots.txt","/img/artex.avif","/img/bar.avif","/img/Error404.avif","/img/Foto.webp","/img/imagen.webp","/img/ImgContact.svg","/img/JavaScript-logo.avif","/img/Lawyer.webp","/img/Logo.svg","/img/LogoNeider.avif","/img/rick and morty.avif","/img/x.jpg","/_astro/Atropos.5vQ5P6Oi.js","/_astro/client.DagFyh-q.js","/_astro/Contacto.D-UWU7eD.js","/_astro/Experiencia.BebNWjfJ.js","/_astro/FormSpree.C5xIl77L.js","/_astro/hoisted.d5SvEsfa.js","/_astro/hoisted.DqR2iBSn.js","/_astro/index.BTGsrsBX.css","/_astro/index.DKr8oJk7.js","/_astro/InformaciónCarrera.DVEG5Kiw.js","/_astro/jsx-runtime.BTjaBGy9.js","/_astro/Profesiones.Cf1ab0rr.js","/_astro/Proyectos.CkwXITsn.js","/_astro/Tecnologías.dJXeWYFE.js","/_astro/typed.module.exEGtOgn.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
