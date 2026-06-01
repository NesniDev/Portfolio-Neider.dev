import { useState } from 'react'
import { TABS } from '../../../lib/infoLanding'

const Category = ['all', 'frontend', 'backend', 'others']
export const Skills = () => {

  const [search, setSearch] = useState('')
  const [searchSelect, setSearchSelect] = useState('all')
  const [showSuggestions, setShowSuggestions] = useState(false);


  const handleChange = (e) => {
    setSearchSelect(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setShowSuggestions(true)

  }
  const filteredByCategory =
    searchSelect === "all"
      ? TABS.skills.content
      : TABS.skills.content.filter(
        (skill) =>
          skill.category.toLowerCase() === searchSelect
      );

  const finalFiltered = filteredByCategory.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  const suggestions = finalFiltered
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5);

  return (
    <section className="flex flex-col justify-start px-4 gap-4 w-full">
      <div className="flex items-start gap-3 w-full justify-start">
        {/* Search */}

        <div className="w-full">
          <form className="relative" onSubmit={e => e.preventDefault()}>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400">
              <img src="/icons/skills/skills.svg" alt="Icon Search" className='size-4' />
            </span>

            <input
              type="text"
              placeholder="Search skills in marketplace..."
              className="
        w-full
        bg-[#0b1a1f]
        border border-emerald-400/40
        text-sm text-white
        placeholder:text-emerald-200/40
        rounded-md
        py-2.5 pl-10 pr-3
        outline-none
        transition
        focus:border-emerald-300
        focus:ring-2 focus:ring-emerald-400/20
        font-jetbrains
      "
              value={search}
              onChange={handleSearch}
              required
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            />
            {/* SUGGESTIONS */}
            {showSuggestions && search && suggestions.length > 0 && (
              <ul className="
    absolute z-10 mt-2 w-full max-h-60
    bg-[#012129]/90 backdrop-blur-md
    border border-emerald-500/30
    rounded-lg
    shadow-[0_8px_30px_rgba(1,33,41,0.8)]
    overflow-y-auto
    divide-y divide-emerald-500/10
    font-mono
  ">
                {suggestions.map((item) => (
                  <li
                    key={item.name}
                    onMouseDown={() => setSearch(item.name)}
                    className="
          group px-4 py-3 text-gray-300 text-sm
          transition-all duration-200 ease-out
          hover:bg-emerald-500/10 hover:text-emerald-400
          hover:pl-6
          cursor-pointer
          flex items-center gap-2
          font-jetbrains
        "
                  >
                    {/* Indicador visual tipo terminal que aparece en hover */}
                    <span className=" text-emerald-500 opacity-0 transform -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                      {'>'}
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </form>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-300 pointer-events-none">
          </span>
        </div>


        {/* Sort button */}
        <div className="relative">
          <select
            className="
      appearance-none
      bg-[#0b1a1f]
      border border-emerald-400/40
      text-emerald-100
      text-sm
      px-4 py-2.5 pr-10
      rounded-md
      hover:bg-[#0f2228]
      focus:outline-none
      focus:border-emerald-300
      focus:ring-2 focus:ring-emerald-400/20
      transition
      cursor-pointer
      font-code
    "
            value={searchSelect}
            onChange={handleChange}
          >
            {
              Category.map((category) => (
                <option className='capitalize ' key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
              ))
            }
          </select>

          {/* Custom arrow */}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-300 pointer-events-none">
            <img src="/icons/arrow-down.svg" alt="Arrow down" className="size-3" />
          </span>
        </div>
      </div>


      <p className='text-gray-400 uppercase font-jetbrains'>Installed Skills ({finalFiltered.length})</p>
      {finalFiltered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500">
          <img src="/icons/skills/skills.svg" alt="No results" className="size-10 mb-4 opacity-50" />
          <p className="font-jetbrains text-sm">No se encontraron habilidades</p>
          <p className="font-code text-xs mt-1">Intenta con otro término de búsqueda</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2 text-white text-sm font-jetbrains shrink">
          {
            finalFiltered.map((skill) => (
              <article key={skill.name} className=" flex items-center gap-3 border border-[#0A2E39] rounded-lg py-4 px-2 transition hover:border-[#4ade80b6] duration-300 hover:shadow-[0_0_15px_rgba(74,222,128,0.35)]">
                <div className="p-2 rounded-lg bg-[#03323d] ">
                  <img src={skill.logo} alt={skill.name} className="size-10" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h2 className="font-jetbrains flex gap-3 text-[16px] items-center font-bold">{skill.name}<span className="bg-green-400/40 text-green-500 px-1 py-0.5 rounded-sm text-xs">Installed</span></h2>
                  <p className="font-code text-xs">{skill.description}</p>
                  <ul className="font-code text-xs flex gap-4 capitalize text-gray-400">
                    <li >{skill.company}</li>
                    <li className='flex items-center gap-1'> <span>
                      <img src="/icons/skills/download.svg" alt="Icon Download" className='size-4 text-slate-400' />
                    </span> {skill.downloads}</li>
                    <li className='flex items-center gap-1'><span className="inline-flex items-center">
                      <img src="/icons/skills/star.svg" alt="Icon Star" className='size-4' />
                    </span> {skill.stars}</li>
                  </ul>
                </div>
              </article>
            ))
          }
        </div>
      )}
    </section >
  )
}
