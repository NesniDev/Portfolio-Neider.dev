import React from 'react';
import { TABS } from '../../../lib/infoLanding'

// ==========================================
// 2. COMPONENTE INDIVIDUAL: ProjectCard
// ==========================================

export const ProjectCard = ({ project }) => {
  return (

    <div className="relative w-full flex flex-col md:flex-row justify-center gap-4 md:gap-6 lg:gap-10 p-4 sm:p-5 border border-[#30363d] rounded-lg bg-[#0b1a1f] font-jetbrains group hover:scale-[1.003] transition-all duration-500 ease-in-out">
      <div className="flex-1 min-w-0">

        {/* Encabezado: Título, Enlace y Botón Star */}
        <div className=" flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <a
              href={project.gh}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-semibold text-sm sm:text-base hover:underline truncate"
            >
              {project.title}
            </a>
            <a
              href={project.page}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors shrink-0"
              aria-label="Visitar página del proyecto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>


        </div>


        {/* Descripción del Proyecto */}
        <p className="mt-2.5 text-slate-400 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {project.text}
        </p>

        {/* Etiquetas de Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-medium border border-emerald-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Pie de Tarjeta: Lenguaje, Estadísticas y Estado */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-3 sm:mt-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span>{project.language}</span>
          </div>


          <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="18" r="3"></circle>
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="18" cy="6" r="3"></circle>
              <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path>
              <path d="M12 12v3"></path>
            </svg>
            <span>{project.forks}</span>
          </div>

          <span>Estado: {project.badge}</span>
        </div>
      </div>
      <div className='flex justify-center items-center w-full md:w-auto shrink-0'>
        <img
          src={project.url}
          alt={project.title}
          loading="lazy"
          width="320"
          height="160"
          className={`w-full md:w-60 lg:w-80 h-32 sm:h-40 object-cover rounded-2xl
transition-all duration-500 ease-out

opacity-0 translate-y-6 scale-95

bg-white/20 backdrop-blur-2xl
border border-white/30

group-hover:opacity-100
group-hover:translate-y-0
group-hover:scale-100
group-hover:shadow-2xl`}
        />
      </div>
    </div>
  );
};

// ==========================================
// 3. COMPONENTE PRINCIPAL: ProjectsGrid
// ==========================================

export const ProjectsGrid = () => {

  if (!TABS.projects.content || TABS.projects.content.length === 0) {
    return (
      <div className="flex justify-center items-center w-full">
        <p className="text-xl text-gray-400 font-mono">No hay proyectos disponibles.</p>
      </div>
    );
  }

  return (
    <>
      <h2 className='flex gap-2 items-center text-lg sm:text-xl text-white font-jetbrains px-2 sm:px-4 md:px-8'>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </span>
        Repositorios <span className='p-1.5 bg-gray-500 rounded-full text-xs sm:text-sm font-bold text-gray-900'>{TABS.projects.content.length}</span></h2>
      <section className="w-full py-4 sm:py-5 px-2 sm:px-4 md:px-6 lg:px-8">
        <div>
          <div className="flex flex-col gap-3 sm:gap-4 justify-items-center">
            {TABS.projects.content.map((project, index) => (
              <ProjectCard
                key={project.title || index}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsGrid;
