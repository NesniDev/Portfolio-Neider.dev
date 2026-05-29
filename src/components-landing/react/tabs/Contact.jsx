const links = [
  {
    name: 'Github',
    url: 'https://github.com/NesniDev',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    hoverColor: 'hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
  },
  {
    name: 'X',
    url: 'https://x.com/NeiderNieto10',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    hoverColor: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.3)]'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/neidernieto/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
    hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]'
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/573132405135',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 0C5.395 0 0 5.395 0 12.031c0 2.148.563 4.167 1.545 5.926L0 24l6.237-1.493A11.972 11.972 0 0012.031 24c6.635 0 12.03-5.395 12.03-12.031C24.061 5.395 18.666 0 12.031 0zm0 22.012c-1.848 0-3.606-.484-5.15-1.357l-3.65.875.888-3.568A9.972 9.972 0 012.02 12.03C2.02 6.505 6.505 2.02 12.03 2.02s10.01 4.485 10.01 10.01-4.485 10.01-10.01 10.01z" />
      </svg>
    ),
    hoverColor: 'hover:text-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]'
  },
  {
    name: 'Gmail',
    url: 'mailto:nestnidev17@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    hoverColor: 'hover:text-[#EA4335] hover:border-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.3)]'
  }
];

export const TerminalContactForm = () => {
  return (
    <div className=" bg-[#01191f] text-gray-300 font-code flex items-center justify-center gap-10 relative overflow-hidden">

      {/* Contenedor principal estilo Glassmorphism */}
      <div className="relative group">

        {/* Efecto de resplandor difuminado detrás del contenedor */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#1f2937] to-[#4b5563] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

        {/* Caja de los enlaces (Barra de herramientas horizontal) */}
        <div className="relative flex flex-col justify-center items-center gap-4 bg-[#0a0f12]/90 backdrop-blur-xl border border-[#1f2937] p-3 rounded-full shadow-2xl z-10">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              title={link.name}
              target="_blank"
              rel="noopener noreferrer"
              className={`
            flex items-center justify-center w-10 h-10 rounded-full
            bg-[#151b21] border border-[#2a3642] 
            
            transition-all duration-300 ease-in-out
            hover:text-white hover:scale-110 hover:shadow-lg
            ${link.hoverColor}
          `}
            >
              {link.icon}
            </a>
          ))}

        </div>
      </div>

      {/* Ventana Principal de la Terminal */}
      <div className="w-full max-w-3xl bg-[#0a0f12] border border-[#1f2937] rounded shadow-2xl z-10 overflow-hidden">

        {/* Barra de Título de la Ventana */}
        <div className="bg-[#151b21] flex items-center px-4 py-1 border-b border-[#1f2937]">
          <div className="flex space-x-2 mr-6">
            <div className="w-3 h-3 rounded-full bg-[#a54040]"></div>
            <div className="w-3 h-3 rounded-full bg-[#aa9d50]"></div>
            <div className="w-3 h-3 rounded-full bg-[#37a5a5]"></div>
          </div>
          <span className="text-gray-500 text-xs md:text-sm tracking-wider">
            root-ubuntu@neidernieto: ~/contact
          </span>
        </div>

        {/* Cuerpo del Formulario */}
        <form className="px-3 py-1 md:p-6 flex flex-col space-y-5">

          {/* Campo: Identificar Usuario */}
          <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 font-code">
            <label className="text-green-500 w-56 flex-shrink-0 flex items-center text-xs md:text-sm ">
              <span className="mr-3 text-gray-600">&gt;</span> Nombre Completo
            </label>
            <input
              type="text"
              placeholder="[Enter Name]"
              className="w-full bg-transparent border border-[#1f2937] rounded-sm px-3 py-1 text-sm focus:outline-none focus:border-green-500 text-gray-50 placeholder-gray-700 transition-colors"
            />
          </div>

          {/* Campo: Ruta de Retorno (Email) */}
          <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0">
            <label className="text-green-500 w-56 flex-shrink-0 flex items-center text-xs md:text-sm">
              <span className="mr-3 text-gray-600">&gt;</span> Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="[Enter Email]"
              className="w-full bg-transparent border border-[#1f2937] rounded-sm px-3 py-1 text-sm focus:outline-none focus:border-green-500 text-gray-50 placeholder-gray-700 transition-colors"
            />
          </div>

          {/* Campo: Carga Útil (Mensaje) */}
          <div className="flex flex-col space-y-4 pt-1">
            <label className="text-green-500 w-full flex items-center text-xs md:text-sm">
              <span className="mr-3 text-gray-600">&gt;</span> input_payload
            </label>
            <textarea
              rows=""
              placeholder="[Enter Message ...]"
              className="w-full bg-transparent border border-[#1f2937] rounded-sm p-4 text-sm focus:outline-none focus:border-green-500 text-gray-50 placeholder-gray-700 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Botón de Ejecución */}
          <div className="flex items-center">
            <span className="text-gray-600 mr-4 md:mr-6">-</span>
            <button
              type="button"
              className="uppercase rounded-sm border border-[#fca985] hover:-translate-y-1 text-[#fca985] px-3 py-2 cursor-pointer text-sm tracking-[0.15em] hover:bg-[#fca985] hover:text-[#01191f] transition-all duration-300 font-semibold"
            >
              Enviar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
