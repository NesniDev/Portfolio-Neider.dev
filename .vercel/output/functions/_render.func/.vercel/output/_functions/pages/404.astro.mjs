/* empty css                                        */
import { c as createComponent, r as renderTemplate, b as addAttribute, d as createAstro, a as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead } from '../chunks/astro/server_CurXskN5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout404;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="Logo.avif"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/layouts/Layout404.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout404", $$Layout404, { "title": "404 - page not found", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-full mx-auto max-w-[1000px] overflow-hidden h-[100vh] justify-center items-center"> <div class="flex flex-col mx-auto  items-center justify-center text-center"> <div class="flex justify-end w-full h-60"> <img src="img/Error404.avif" alt="Imagen 404"> </div> <div class="flex flex-col mx-auto justify-center items-center text-center font-extrabold"> <h2 class="text-base sm:text-xl md:text-2xl bg-slate-100 text-black w-fit p-1">
Page Not Found
</h2> </div> </div> <a href="/" class="text-center md:text-2xl underline mt-10">Acceder a la página princial de <span class="bg-yellow-400/50 p-1 extra">Neider</span></a> </div> ` })} `;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/pages/404.astro", void 0);

const $$file = "C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
