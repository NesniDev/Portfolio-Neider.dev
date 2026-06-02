import { useStore } from '@nanostores/react';
import { activeTab } from '../store/tabsStore'; // Asegúrese de que la ruta sea correcta

import { TABS } from '../../lib/infoLanding';
import { Profile } from './tabs/Profile';
import { Skills } from './tabs/Skills';
import { ProjectsGrid } from './tabs/Projects';
import { Experience } from './tabs/Experience';
import { TerminalContactForm } from './tabs/Contact';
import { WelcomeScreen } from './tabs/Index';


export const ViewContent = () => {
  // 1. Suscripción al estado global de Nano Stores
  const currentTab = useStore(activeTab);


  // 3. Obtención de datos
  const data = TABS[currentTab] || TABS.welcome;

  const codigoString = data.isCode
    ? typeof data.content === 'object'
      ? JSON.stringify(data.content, null, 2)
      : data.content
    : '';

  // 4. Patrón de enrutamiento interno (Switch o Diccionario)
  // Esto reemplaza la cadena de ternarios, aislando la lógica de renderizado.
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
      {renderizarContenido()}
    </div>
  );
};