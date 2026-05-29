import React from 'react';
import { PROJECTS } from '../../../lib/Projects'

// ==========================================
// 2. COMPONENTE INDIVIDUAL: ProjectCard
// ==========================================

export const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-3 border border-emerald-900/40 rounded-2xl p-6 w-full  shadow-2xl">

      {/* Cabecera: Icono y Enlaces */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-2.5 rounded-xl text-emerald-400 border border-emerald-800/30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>

        <div className="flex gap-3">
          <a href={project.gh} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl border border-emerald-900/40 text-emerald-400 hover:bg-emerald-900/20 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
            </svg>
          </a>
          <a href={project.page} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl border border-emerald-900/40 text-emerald-400 hover:bg-emerald-900/20 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Título y Descripción */}
      <h3 className="text-xl font-bold text-gray-100 tracking-wide">
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-400 ">
        {project.text}
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 text-xs font-mono rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Estado */}
      <div className="flex justify-between items-center border-t border-emerald-900/30 pt-5">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-emerald-400 tracking-wider">
            {project.badge}
          </span>
          <span className="text-xs text-gray-500 font-medium">Status</span>
        </div>
      </div>

    </div>
  );
};

// ==========================================
// 3. COMPONENTE PRINCIPAL: ProjectsGrid
// ==========================================

export const ProjectsGrid = () => {
  if (!PROJECTS || PROJECTS.length === 0) {
    return (
      <div className="flex justify-center items-center w-full min-h-[400px]">
        <p className="text-xl text-gray-400 font-mono">No hay proyectos disponibles.</p>
      </div>
    );
  }

  return (
    <section className="w-full py-5 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title || index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}