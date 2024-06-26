import React from "react";
import Typed from "typed.js";

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<span class='textoInfo'>Ingeniero de Sistemas</span>",
        "<span class='textoInfo'>Desarrollador Front-End</span>",
        "<span class='textoInfo'>Especialista en Marketing Estratégico</span>",
        "<span class='textoInfo'>Técnico en Sistemas e Informática</span>",
      ],
      // stringsElement: '#cadena-desarrolloF', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 20, // Velocidad en mlisegundos para poner una letra,
      startDelay: 100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: "|", // Caracter para el cursor
      contentType: "html", // 'html' o 'null' para texto sin formato
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default MyComponent;
