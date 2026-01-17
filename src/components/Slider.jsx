import Marquee from 'react-fast-marquee'
import { TOOLS } from '../lib/Technologies'

export default function Slider({ speed, gradient, direction, category }) {
  return (
    <Marquee
      speed={speed}
      gradient={gradient}
      direction={direction}
      pauseOnHover={true}
    >
      {TOOLS.filter((tool) => tool.category === category).map((tool, index) => (
        <div key={index} className="group relative my-6">
          <div className="relative flex flex-col items-center p-4 hover:scale-105 transition">
            <img
              src={tool.logo}
              alt={tool.name}
              className="md:size-16 lg:size-20 size-10 object-contain object-center rounded-full"
            />
          </div>
          <span
            class="absolute -top-6 left-1/2 -translate-x-1/2 
          z-20 origin-left scale-0 px-3 rounded-lg border 
          border-gray-300 bg-white py-2 text-[#012029] text-sm font-bold
          shadow-md transition-all duration-300 ease-in-out 
          group-hover:scale-100"
          >
            {tool.name}
          </span>
        </div>
      ))}
    </Marquee>
  )
}
