import { useState } from "react";
import "./StylesOnCss/Modal.css";

// import { useModal } from "./useModal.jsx";

const Modales = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const CloseMod = () => (
    <svg
      className="size-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z"
          fill="#ff0000"
        ></path>{" "}
      </g>
    </svg>
  );
  return (
    <div>
      <button
        onClick={openModal}
        id="openModal"
        className="my-2 flex items-center mx-auto group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500
             hover:border-gray-400 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500
              hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8
               hover:before:blur origin-left border-[2px] border-slate-200 dark:border-slate-400 transition
                relative bg-[#012029] dark:bg-white dark:text-[#012029] h-10 w-52 border- text-left px-2 text-white text-base font-bold rounded-lg
                overflow-hidden before:absolute before:w-12 before:h-8 before:content[''] before:right-1 before:top-1
                before:z-10 before:bg-red-700 before:rounded-md before:blur-lg after:absolute after:z-10 after:w-20 after:h-8
                 after:content[''] after:bg-yellow-400 after:right-8 after:top-1 after:rounded-full after:blur-lg"
      >
        Sobre Mí...
      </button>
      {isOpen && (
        <article className="modal is-open animate-blurred-fade-in">
          <div className="modal-container mx-28 mt-[50px] md:mt-0 mb-[50px] md:mb-0 md:mx-0 bg-slate-300 rounded-3xl">
            <button className="modal-close" onClick={closeModal}>
              <CloseMod />
            </button>
            <div className="flex mx-auto justify-between">
              <h3 className="mx-auto text-center mt-10 md:mt-12  text-slate-900 font-extrabold text-xl md:text-4xl md:mb-5 mb-2">
                Sobre mi...
              </h3>

              <img
                className="size-28 md:size-32 mx-auto"
                src="https://api.dicebear.com/8.x/adventurer/svg?seed=Coco"
                alt="nature"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-slate-900 text-[10px] md:text-sm cursor-none">
                ¡Hola! Mi nombre es <strong> Neider Nieto</strong>, Ingeniero de
                Sistemas con una inclinación especial hacia el desarrollo
                frontend. Desde que comencé en el mundo de la tecnología, he
                estado fascinado por la intersección entre la funcionalidad y la
                experiencia del usuario. Crear interfaces intuitivas y
                atractivas que mejoren la interacción del usuario es lo que me
                motiva a seguir aprendiendo y creciendo en esta disciplina.
              </p>
              <p className="text-slate-900 text-[10px] md:text-sm cursor-none">
                Durante mi carrera, he trabajado en diversos proyectos que me
                han permitido perfeccionar mis habilidades en HTML, CSS,
                JavaScript y frameworks modernos como React y Astro. Me encanta
                transformar ideas en experiencias de usuario fluidas y
                accesibles, prestando atención a cada detalle para asegurar una
                navegación óptima y una excelente usabilidad.
              </p>

              <p className="text-slate-900 text-[10px] md:text-sm cursor-none italic">
                <i>
                  Mi objetivo es seguir creciendo como desarrollador frontend,
                  contribuyendo con mis conocimientos y creatividad para
                  construir aplicaciones web que no solo cumplan con los
                  requisitos técnicos, sino que también superen las expectativas
                  de los usuarios.
                </i>
              </p>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default Modales;
