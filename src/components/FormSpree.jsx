import React, { useState } from "react";

import axios from "axios";
import ButtonForm from "./ButtonForm.jsx";

function ContactForm() {
  const [state, setState] = useState({
    names: "",
    email: "",
    tel: "",
    grupocontacto: false,
    grupocontacto2: false,
    message: "",
  });

  const ThumbsDown = () => (
    <svg
      // {...Astro.props}
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-thumb-down-filled cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M13 21.008a3 3 0 0 0 2.995 -2.823l.005 -.177v-4h2a3 3 0 0 0 2.98 -2.65l.015 -.173l.005 -.177l-.02 -.196l-1.006 -5.032c-.381 -1.625 -1.502 -2.796 -2.81 -2.78l-.164 .008h-8a1 1 0 0 0 -.993 .884l-.007 .116l.001 9.536a1 1 0 0 0 .5 .866a2.998 2.998 0 0 1 1.492 2.396l.007 .202v1a3 3 0 0 0 3 3z"
        stroke-width="0"
        fill="currentColor"
      ></path>
      <path
        d="M5 14.008a1 1 0 0 0 .993 -.883l.007 -.117v-9a1 1 0 0 0 -.883 -.993l-.117 -.007h-1a2 2 0 0 0 -1.995 1.852l-.005 .15v7a2 2 0 0 0 1.85 1.994l.15 .005h1z"
        stroke-width="0"
        fill="currentColor"
      ></path>
    </svg>
  );

  const ThumbsUp = () => (
    <svg
      // {...Astro.props}
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-thumb-up-filled cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z"
        stroke-width="0"
        fill="currentColor"
      ></path>
      <path
        d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z"
        stroke-width="0"
        fill="currentColor"
      ></path>
    </svg>
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === "radio" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://formspree.io/f/mkndrbdo",
        state
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      class="flex flex-col"
      id="form"
      onSubmit={handleSubmit}
      // action="https://formspree.io/f/mkndrbdo"
      // method="POST"
    >
      <div class="grid gap-6 mb-6 md:grid-cols-1">
        <div class="relative z-0">
          <input
            name="names"
            autocomplete="off"
            type="text"
            id="floating_standard"
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#012029] dark:border-[#012029] dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
            value={state.names}
            onChange={handleChange}
          />
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:peer-focus:dark:text-orange-600 peer-focus:dark:font-extrabold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Nombres
          </label>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-1">
        <div class="relative z-0">
          <input
            name="email"
            autocomplete="off"
            type="email"
            id="floating_standard"
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#012029] dark:border-[#012029] dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            value={state.email}
            onChange={handleChange}
          />
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:peer-focus:dark:text-orange-600 peer-focus:dark:font-extrabold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Correo Electrónico
          </label>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-1">
        <div class="relative z-0">
          <input
            name="tel"
            autocomplete="off"
            type="tel"
            id="floating_standard"
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#012029] dark:border-[#012029] dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
            value={state.tel}
            onChange={handleChange}
          />
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:peer-focus:dark:text-orange-600 peer-focus:dark:font-extrabold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Teléfono
          </label>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-1">
        <h2 class="font-extrabold text-center">¿TE GUSTÓ EL PORTAFOLIO?</h2>
        <div class="flex justify-center gap-10 py-0">
          <label
            class="hover:text-green-500 hover:scale-[1.7] transition ease-in-out delay-200"
            for="telefono-radio"
          >
            <ThumbsUp />
          </label>
          <input
            type="radio"
            name="grupocontacto"
            checked={state.grupocontacto}
            onChange={handleChange}
            hidden
          />
          <label
            class="hover:text-red-500 hover:scale-[1.7] transition ease-in-out delay-200"
            for="correo-radio"
          >
            <ThumbsDown />
          </label>
          <input
            type="radio"
            name="grupocontacto2"
            checked={state.grupocontacto2}
            onChange={handleChange}
            hidden
          />
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-1">
        <div class="relative z-0">
          <textarea
            name="message"
            id="floating_standard"
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#012029] dark:border-[#012029] dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
            value={state.message}
            onChange={handleChange}
          ></textarea>
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-7 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:peer-focus:dark:text-orange-600 peer-focus:dark:font-extrabold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Comentarios
          </label>
        </div>
      </div>

      <ButtonForm />
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
