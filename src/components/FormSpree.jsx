import React, { useState } from "react";
import ThumbsUp from "../icons/variable/ThumbsUp.astro";
import ThumbsDown from "../icons/variable/ThumbsDown.astro";
import { useForm } from "@formspree/react";
import axios from "axios";
import ButtonForm from "./ButtonForm.jsx";
// import ReactComponent from "./ReactComponent";

function ContactForm() {
  const [state, setState] = useState({
    names: "",
    email: "",
    tel: "",
    grupocontacto: false,
    grupocontacto2: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === "radio" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post(
        "https://formspree.io/f/mkndrbdo",
        state
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setState({
      names: "",
      email: "",
      tel: "",
      grupocontacto: false,
      grupocontacto2: false,
      message: "",
    });
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
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-300/60 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
            value={state.names}
            onChange={handleChange}
          />
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-300/60 peer-focus:dark:font-extrabold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
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
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-300/60 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            value={state.email}
            onChange={handleChange}
          />
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-300/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
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
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-300/60 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
            value={state.tel}
            onChange={handleChange}
          />
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-300/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
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
            {/* <ReactComponent>
                <ThumbsUp class="cursor-pointer" />
            </ReactComponent> */}
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
            {/* <ReactComponent>
              <ThumbsDown class="cursor-pointer" />
            </ReactComponent> */}
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
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-300/60 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
            value={state.message}
            onChange={handleChange}
          ></textarea>
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-7 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-300/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
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
