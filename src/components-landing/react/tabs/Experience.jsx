
export const Experience = ({ info }) => {
  const data = info.content
  return (
    <div className=" bg-[#01191f] px-2 sm:px-3 text-sm">
      <div className="flex flex-wrap items-center gap-2 text-white text-xs sm:text-sm font-jetbrains border-b border-[#444444] mb-5 sm:mb-7 pb-3">
        <img src="/icons/experience/main.svg" alt="main" className="size-4" />
        <span className='text-white font-code'>main</span>
        <span className="inline-flex items-center text-slate-400 text-xs">
          <img src="/icons/experience/commit.svg" alt="Icon Commit" className='size-4' />
        </span>
        <span className='text-gray-400'>{data.length} commits</span>
      </div>
      <div className="relative">
        {/* Línea vertical continua que conecta los nodos */}
        <div className="absolute left-2.75 top-4 bottom-0 w-px bg-slate-700/60 z-0"></div>

        <div className="flex flex-col gap-7 sm:gap-10">
          {data.map((item, index) => {

            return (
              <div key={index} className="relative pl-8 sm:pl-10 flex flex-col gap-2 z-10">
                {/* Diseño del nodo estilo Git */}
                <div className={`absolute left-0 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 ${item.tag === 'main' ? 'border-emerald-500 bg-emerald-900/40 text-emerald-400' : item.tag === "education" ? " border-sky-500 bg-sky-900/40 text-sky-400" : "border-amber-500 bg-amber-900/40 text-amber-400"} flex items-center justify-center`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${item.tag === 'main' ? 'bg-emerald-500' : item.tag === "education" ? "bg-sky-500" : "bg-amber-500"}`}></div>
                </div>

                {/* Encabezado: Hash, Tipo y Título */}
                <div className="flex flex-wrap items-baseline gap-2 font-code text-xs sm:text-sm">
                  <span className="text-amber-500 font-semibold">{item.hash}</span>
                  <span className="text-slate-200">
                    <span className="font-bold">{item.type}:</span> {item.title}
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-slate-400 text-xs font-jetbrains leading-relaxed">
                  {item.description}
                </p>

                {/* Metadatos inferiores */}
                <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 text-slate-500 mt-1 font-code text-xs">
                  <div className="flex items-center gap-1.5">
                    <span>{item.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>{item.date}</span>
                  </div>
                  <div className={`px-2 py-0.5 rounded-sm ${item.tag === 'education' ? 'bg-sky-900/40 text-sky-400' : item.tag === "certifications" ? "bg-amber-900/40 text-amber-400" : "bg-emerald-900/40 text-emerald-400"} font-medium`}>
                    {item.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
}
