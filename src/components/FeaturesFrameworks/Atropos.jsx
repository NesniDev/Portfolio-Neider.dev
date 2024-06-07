import Atropos from "atropos/react";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(false);

  const handleButton = () => {};
  return (
    <div id="app">
      {/* Atropos */}
      <Atropos
        ClassName="my-atropos"
        // activeOffset={40}
        shadow={true}
        highlight={true}
        shadowScale={2}
        rotateTouch={true}
        rotate={true}
        rotateXMax={50}
        rotateYMax={50}
      >
        <div className="image" data-atropos-offset="5">
          <img className=" rounded-2xl" src="img/imagen.webp " alt="" />
          <div className="absolute text-center flex flex-col text-xs md:text-xl items-center content-end bottom-0 p-1 md:p-10 mx-auto left-0 right-0 z-10 text-white">
            <h2 className="text-xl md:text-3xl font-extrabold mb-5">
              Ingeniero de Sistemas
            </h2>
            <p className="text-sm md:text-base font-extralight">
              "Primero aprende informática y toda la teoría.
            </p>
            <p className="text-sm md:text-base font-extralight">
              Después desarrolla un estilo de programación.
            </p>
            <p className="text-sm md:text-base font-extralight">
              Entonces, olvídalo todo y hackea"
            </p>
            <em className="text-sm my-3 md:my-5">"George Carrette"</em>
          </div>
        </div>
      </Atropos>
    </div>
  );
}
