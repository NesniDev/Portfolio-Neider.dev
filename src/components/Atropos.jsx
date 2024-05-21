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
            <p class="text-sm md:text-base font-extralight">
              "Primero aprende informática y toda la teoría.
            </p>
            <p class="text-sm md:text-base font-extralight">
              Después desarrolla un estilo de programación.
            </p>
            <p class="text-sm md:text-base font-extralight">
              Entonces, olvídalo todo y hackea"
            </p>
            <em class="text-sm my-3 md:my-5">"George Carrette"</em>
          </div>
        </div>
      </Atropos>
    </div>
  );
}
