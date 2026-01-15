import Marquee from 'react-fast-marquee'
import { TOOLS } from '../lib/Technologies'

export default function Slider() {
  return (
    <Marquee speed={40} gradient={false}>
      {TOOLS.map((tool, index) => (
        <div key={index} className="group relative">
          <tool.logo className="size-10 transition-transform hover:scale-110" />
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100">
            {tool.name}
          </span>
        </div>
      ))}
    </Marquee>
  )
}
