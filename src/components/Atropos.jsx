import Atropos from "atropos/react";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(false);

  const handleButton = () => {};
  return (
    <div id="app">
      {/* Atropos */}
      <Atropos
        className="my-atropos"
        // activeOffset={40}
        shadow={true}
        highlight={true}
        shadowScale={2}
        rotateTouch={true}
        rotate={true}
        rotateXMax={50}
        rotateYMax={50}
      >
        <div class="image" data-atropos-offset="5">
          <img class=" rounded-2xl" src="img/imagen.webp " alt="" />
          <div class="absolute text-center flex flex-col text-xs md:text-xl items-center content-end bottom-0 p-1 md:p-10 mx-auto left-0 right-0 z-10 text-white">
            <h2 class="text-xl md:text-3xl font-extrabold mb-5">
              Ingeniero de Sistemas
            </h2>
            <p class="text-sm md:text-base">
              "Primero aprende informática y toda la teoría.
            </p>
            <p class="text-sm md:text-base">
              Después desarrolla un estilo de programación.
            </p>
            <p class="text-sm md:text-base">
              Entonces, olvídalo todo y hackea"
            </p>
            <em class="text-sm my-3 md:my-5">"George Carrette"</em>
          </div>
        </div>
      </Atropos>
      <button
        onClick={handleButton}
        class="my-2 flex items-center mx-auto group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500
             hover:border-gray-400 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500
              hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8
               hover:before:blur  origin-left border-[2px] border-slate-200 dark:border-slate-400  transition
                relative bg-[#012029] dark:bg-white dark:text-[#012029] h-10 w-52 border- text-left px-2  text-white text-base font-bold rounded-lg  
                overflow-hidden  before:absolute before:w-12 before:h-8 before:content[''] before:right-1 before:top-1 
                before:z-10 before:bg-red-700 before:rounded-md before:blur-lg  after:absolute after:z-10 after:w-20 after:h-8
                 after:content[''] after:bg-yellow-400 after:right-8 after:top-1 after:rounded-full after:blur-lg"
      >
        Sobre Mí...
      </button>
    </div>
  );
}
