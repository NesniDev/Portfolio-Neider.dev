import { lazy, Suspense } from 'react';
import { useStore } from '@nanostores/react';
import { activeTab } from '../store/tabsStore';

import { TABS } from '../../lib/infoLanding';

const Profile = lazy(() => import('./tabs/Profile'));
const Skills = lazy(() => import('./tabs/Skills'));
const ProjectsGrid = lazy(() => import('./tabs/Projects'));
const Experience = lazy(() => import('./tabs/Experience'));
const TerminalContactForm = lazy(() => import('./tabs/Contact'));
const WelcomeScreen = lazy(() => import('./tabs/Index'));


export const ViewContent = () => {
  const currentTab = useStore(activeTab);

  const data = TABS[currentTab] || TABS.welcome;

  const codigoString = data.isCode
    ? typeof data.content === 'object'
      ? JSON.stringify(data.content, null, 2)
      : data.content
    : '';

  const renderizarContenido = () => {
    switch (currentTab) {
      case 'profile':
        return data.isCode ? <Profile codigoString={codigoString} info={data} /> : null;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <ProjectsGrid />;
      case 'experience':
        return <Experience info={data} />;
      case 'contact':
        return <TerminalContactForm />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div
      key={currentTab}
      className="w-full h-full py-3 sm:py-4 px-2 sm:px-3 overflow-y-auto animate-fade-in transition-opacity duration-300"
    >
      <Suspense fallback={<div className="text-neutral-500 text-sm p-4">Cargando...</div>}>
        {renderizarContenido()}
      </Suspense>
    </div>
  );
};