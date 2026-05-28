import { useEffect, useState } from 'react'
import { TABS } from '../../lib/infoLanding'

// 1. Importamos Highlight y el objeto de temas (themes) nativos
import { Profile } from './tabs/Profile'
import { Skills } from './tabs/Skills'
import { Projects } from './tabs/Projects'

export const ViewContent = () => {
  const [tabActiva, setTabActiva] = useState('profile')

  useEffect(() => {
    const handleEvent = (event) => setTabActiva(event.detail)
    window.addEventListener('change-content', handleEvent)
    return () => window.removeEventListener('change-content', handleEvent)
  }, [])

  const data = TABS[tabActiva] || TABS.welcome

  const codigoString = data.isCode
    ? typeof data.content === 'object'
      ? JSON.stringify(data.content, null, 2)
      : data.content
    : ''

  return (
    <div
      key={tabActiva}
      className="p-10 animate-fade-in transition-opacity duration-300"
    >
      {tabActiva === 'projects' ? (
        <Projects />
      ) : tabActiva === 'profile' && data.isCode ? (
        // 2. Usamos directamente themes.vsDark (o puede probar themes.nightOwl)
        <Profile codigoString={codigoString} info={data} />
      ) : tabActiva === 'skills' ? (
        <Skills />
      ) : tabActiva === 'contact' ? (
        <Contact />
      ) : (
        <div className="text-gray-400 text-lg">{data.content}</div>
      )}
    </div>
  )
}
