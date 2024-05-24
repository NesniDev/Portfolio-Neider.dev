import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [subscribe, setSubscribe] = useState(true);

  const alert = () => {
    toast.success("¡ Me pondré en contacto contigo !", {
      position: "top-center",
      className: "foo-bar",
      // transition: Zoom,
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    setSubscribe(!subscribe);
  };
  return (
    <>
      <button
        id="button"
        type="submit"
        onClick={alert}
        class="w-fit m-auto text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:red-cyan-800 rounded-lg text-sm px-5 py-2.5 text-center mb-2 font-extrabold"
      >
        {subscribe ? "Enviar Formulario" : "Formulario Enviado"}
      </button>
      <ToastContainer />
    </>
  );
}
export default App;
