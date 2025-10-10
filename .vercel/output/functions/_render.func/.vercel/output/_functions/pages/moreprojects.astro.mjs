/* empty css                                        */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CsCEEFOo.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, P as PROJECTS, b as $$GitHub, c as $$Chrome } from '../chunks/Container_Dsj8JOmx.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$MoreProjects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Paginas de los proyectos que he realizado", "description": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="grids mt-5 text-center flex gap-5"> ${PROJECTS.map((project) => renderTemplate`<article class="relative before:absolute before:rounded-lg before:content before:bg-[var(--lineTop)] before:h-[5px] before:top-0 before:left-0 before:right-0 before:z-10
                after:absolute after:rounded-lg after:content after:bg-sky-500 after:h -[5px] after:bottom-0 after:left-0 after:right-0 after:z-10
                bg-[#D3D3D3] text-[#1d2029] overflow-hidden rounded-lg flex flex-col"> <div class="overflow-hidden hover:bg-gradient-to-b from-black"> <img class="h-44 w-full hover:scale-125 transition ease-in-out hover:animate-pulse object-center"${addAttribute(project.url, "src")}${addAttribute(`Imagen de ${project.title}`, "alt")}> </div> <div class="flex flex-col flex-1 items-center text-balance p-5"> <h3 class="text-2xl font-black">${project.title}</h3> <span class="flex justify-between items-center gap-3 mt-3"> ${project.technologies.map((tecnology) => renderTemplate`<span${addAttribute(`flex flex-col justify-center items-center font-extrabold ${tecnology.class}`, "class")}> ${renderComponent($$result3, "tecnology.icon", tecnology.icon, { "class": "size-5 hover:scale-125 transition cursor-crosshair icon" })} </span>`)} </span> <p class="flex flex-1 mt-3 text-justify text-sm font-extralight"> ${project.text} </p> </div> <span${addAttribute(`mx-auto badge ${project.badge === "Completed" ? "completed" : "in-progress"}`, "class")}> ${project.badge} </span> <footer class="flex flex-row justify-center gap-5 mb-5"> <a${addAttribute(project.gh, "href")} target="_blank"> ${renderComponent($$result3, "GitHub", $$GitHub, { "class": "h size-8 hover:scale-125 hover:filter hover:drop-shadow-lg transition cursor-pointer" })} </a> <a${addAttribute(project.page, "href")} target="_blank"> ${renderComponent($$result3, "Chrome", $$Chrome, { "class": "h size-8 hover:scale-110 hover:filter hover:drop-shadow-lg hover:from-red-500 transition cursor-pointer " })} </a> </footer> </article>`)} </section> ` })} ` })} `;
}, "C:/Users/Neider/Documents/Github/P\xE1ginasWeb/Portfolio-Neider.dev/src/pages/MoreProjects.astro", void 0);

const $$file = "C:/Users/Neider/Documents/Github/PáginasWeb/Portfolio-Neider.dev/src/pages/MoreProjects.astro";
const $$url = "/MoreProjects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MoreProjects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
