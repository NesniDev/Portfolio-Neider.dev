// src/components-landing/react/WelcomeScreen.jsx

export const WelcomeScreen = () => {
  const recentProjects = [
    { name: 'Portfolio', path: '~\/home\/neider\/projects\/pages' },
    { name: 'SolvePc', path: '~\/home\/neider\/projects\/pages' },
    { name: 'TecnicoSistemas', path: '~\/home\/neider\/projects\/pages' }
  ];

  const startOptions = [
    { name: 'Open Folder', url: 'none', icon: '/icons/home/folder.svg' },
    { name: 'Generate New Project', url: 'https://github.com/new', icon: '/icons/home/plus.svg' },
    { name: 'Download Curriculum', url: '/Hojadevida.pdf', icon: '/icons/home/download.svg' }
  ];


  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 lg:p-16 text-gray-300 font-jetbrains animate-fade-in select-none">

      {/* Título Principal */}
      <div className="mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-code font-semibold text-white tracking-wide text-center leading-tight">
          Neider Nieto
        </h1>
        <p className="text-center text-xs sm:text-sm md:text-base text-gray-400 mt-2 sm:mt-3 font-jetbrains">
          Ingeniero de Sistemas · Full-Stack Developer
        </p>
      </div>

      {/* Contenedor Grid a dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full max-w-4xl">

        {/* Columna Izquierda: Acciones de Inicio */}
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Start</h2>

          {
            startOptions.map((option, idx) => {
              return option.url.includes('none') ? (
                <button key={idx} className="flex items-center gap-3 px-4 py-2.5 bg-[rgba(255,255,255,0.06)] text-white rounded-md cursor-pointer transition hover:bg-[rgba(255,255,255,0.1)] w-full text-left border border-[rgba(255,255,255,0.05)]">
                  <img src={option.icon} alt={option.name} className='w-5 h-5 text-red-500 shrink-0' />
                  <span className="font-medium text-sm truncate">{option.name}</span>
                </button>
              ) : (
                <a key={idx} href={option.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 bg-[rgba(255,255,255,0.06)] text-white rounded-md cursor-pointer transition hover:bg-[rgba(255,255,255,0.1)] w-full text-left border border-[rgba(255,255,255,0.05)]">
                  <img src={option.icon} alt={option.name} className='w-5 h-5 text-red-500 shrink-0' />
                  <span className="font-medium text-sm truncate">{option.name}</span>
                </a>
              )
            })}


        </div>

        {/* Columna Derecha: Proyectos Recientes */}
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Recent Projects</h2>

          <div className="flex flex-col gap-1.5">
            {recentProjects.map((proj, idx) => (
              <button
                key={idx}
                className="flex justify-between items-center px-4 py-2.5 bg-[rgba(255,255,255,0.03)] rounded-md cursor-pointer transition hover:bg-[rgba(255,255,255,0.06)] w-full text-left group border border-[rgba(255,255,255,0.02)]"
              >
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                  {proj.name}
                </span>
                <span className="text-xs text-gray-500 font-jetbrains truncate ml-4 max-w-[120px] sm:max-w-[150px] hidden xs:inline">
                  {proj.path}
                </span>
              </button>
            ))}
          </div>

          <button className="text-sm text-gray-500 hover:text-gray-300 text-left px-4 mt-2 transition-colors w-max">
            Show More...
          </button>
        </div>

      </div>
    </div>
  );
};
