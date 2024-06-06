import { useEffect, useState } from "react";

export default function DarkMode() {
  const SunMode = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-sun"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  );

  const MoonMode = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-moon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>
  );
  const [theme, setTheme] = useState(() => {
    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   return "dark";
    // }
    // return "light";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      document.documentElement.classList.toggle("dark");
  });
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    console.log(setIcon(!icon));
  };

  return (
    <div>
      <button
        className="text-yellow-500 dark:bg-sky-500"
        onClick={handleChangeTheme}
      >
        {localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
          <SunMode />
        ) : (
          <MoonMode />
        )}
      </button>
    </div>
  );
}
