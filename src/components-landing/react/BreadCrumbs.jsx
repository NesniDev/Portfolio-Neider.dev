export const BreadCrumbs = () => {
  return (
    <div className="block text-sm text-gray-400 mb-4 border border-[#2a2a2a] border-l-0 pl-7 py-2 font-jetbrains">
      <ul className="flex items-center gap-2 text-sm text-gray-400">
        <li >
          <a href="/" className="text-gray-400 transition hover:text-gray-500">
            Portfolio
          </a>
        </li>
        <li >
          <img src="/icons/arrow-right.svg" alt="Arrow right" className="size-3" />
        </li>
        <li >
          <a href="/" className="text-gray-400 transition hover:text-gray-500">
            src
          </a>
        </li>
        <li >
          <img src="/icons/arrow-right.svg" alt="Arrow right" className="size-3" />
        </li>
        <li >
          <a href="/" className="text-gray-300 transition hover:text-gray-500">
            perfil.json
          </a>
        </li>
      </ul>
    </div>
  )
}