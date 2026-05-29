import { useEffect, useState } from 'react'
import { TABS } from '../../lib/infoLanding'
import { Profile } from './tabs/Profile'
import { Skills } from './tabs/Skills'
import { ProjectsGrid } from './tabs/Projects'
import { Experience } from './tabs/Experience'
import { TerminalContactForm } from './tabs/Contact'

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
      className="w-full py-4 px-2 animate-fade-in transition-opacity duration-300"
    >

      {tabActiva === 'projects' ? (
        <ProjectsGrid />
      ) : tabActiva === 'profile' && data.isCode ? (
        // 2. Usamos directamente themes.vsDark (o puede probar themes.nightOwl)
        <Profile codigoString={codigoString} info={data} />
      ) : tabActiva === 'skills' ? (
        <Skills />
      ) : tabActiva === 'contact' ? (
        <TerminalContactForm />
      ) : tabActiva === 'experience' ? (
        <Experience info={data} />) :

        (
          <div className="text-gray-400 text-lg">{data.content}</div>
        )}
    </div>

  )
}
