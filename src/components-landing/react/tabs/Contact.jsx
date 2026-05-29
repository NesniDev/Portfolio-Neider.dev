import { supabase } from "../../lib/supabaseClient.js";
import { useState } from "react";
import confetti from "canvas-confetti"


const links = [
  {
    name: 'Github',
    url: 'https://github.com/NesniDev',
    icon: '/icons/links/github.svg',
    hoverColor: 'hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
  },
  {
    name: 'X',
    url: 'https://x.com/NeiderNieto10',
    icon: "/icons/links/x.svg",
    hoverColor: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.3)]'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/neidernieto/',
    icon: '/icons/links/linkedin.svg',
    hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]'
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/573132405135',
    icon: '/icons/links/whatsapp.svg',
    hoverColor: 'hover:text-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]'
  },
  {
    name: 'Gmail',
    url: 'mailto:nestnidev17@gmail.com',
    icon: '/icons/links/gmail.svg',
    hoverColor: 'hover:text-[#EA4335] hover:border-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.3)]'
  }
];

export const TerminalContactForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const { error } = await supabase
      .from("user") // 👈 reemplaza por el nombre real
      .insert([
        {
          name: form.name,
          email: form.email,
          message: form.message
          // created_at no es necesario si Supabase lo maneja por default
        }
      ])

    setLoading(false)

    if (error) {
      setStatus("Error al enviar el mensaje")
      console.error(error.message)
      return
    }

    setStatus("Mensaje enviado correctamente")

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    })
    setForm({
      name: "",
      email: "",
      message: ""
    })
  }

  console.log(form)
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
              <img src={link.icon} alt={link.name} className='w-5 h-5' />
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
        <form onSubmit={handleSubmit} className="px-3 py-1 md:p-6 flex flex-col space-y-5">

          {/* Campo: Identificar Usuario */}
          <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 font-code">
            <label className="text-green-500 w-56 flex-shrink-0 flex items-center text-xs md:text-sm ">
              <span className="mr-3 text-gray-600">&gt;</span> Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
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
              name="email"
              value={form.email}
              onChange={handleChange}
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
              value={form.message}
              onChange={handleChange}
              rows=""
              name="message"
              placeholder="[Enter Message ...]"
              className="w-full bg-transparent border border-[#1f2937] rounded-sm p-4 text-sm focus:outline-none focus:border-green-500 text-gray-50 placeholder-gray-700 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Botón de Ejecución */}
          <div className="flex items-center">
            <span className="text-gray-600 mr-4 md:mr-6">-</span>
            <button
              disabled={loading}
              className="uppercase rounded-sm border border-[#fca985] hover:-translate-y-1 text-[#fca985] px-3 py-2 cursor-pointer text-sm tracking-[0.15em] hover:bg-[#fca985] hover:text-[#01191f] transition-all duration-300 font-semibold"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
