import { useStore } from '@nanostores/react';
import { activeTab, openedTabs } from '../store/tabsStore'; // Verifique que la ruta coincida con su estructura

export const BreadCrumbs = () => {
  // 1. Suscripción al estado global
  const currentId = useStore(activeTab);
  const tabs = useStore(openedTabs);

  // 2. Búsqueda de la información de la pestaña activa actual
  const currentTabObj = tabs.find(tab => tab.id === currentId);

  return (
    <div className={` ${currentTabObj ? 'block' : 'hidden'} text-sm text-gray-400 mb-4 border border-[#2a2a2a] border-l-0 pl-7 py-2 font-jetbrains`}>
      <ul className={`${currentTabObj ? 'flex' : 'hidden'}  items-center gap-2 text-sm text-gray-400`}>

        <li>
          <span className="text-gray-400 cursor-default transition hover:text-gray-500">
            Portfolio
          </span>
        </li>
        <li>
          <img src="/icons/arrow-right.svg" alt="Arrow right" className="size-3" />
        </li>

        {/* Directorio principal */}
        <li>
          <span className="text-gray-400 cursor-default transition hover:text-gray-500">
            src
          </span>
        </li>

        {/* Raíz del proyecto */}

        {/* Renderizado condicional: Solo mostramos el archivo si hay una pestaña activa */}
        {currentTabObj && (
          <>
            <li>
              <img src="/icons/arrow-right.svg" alt="Arrow right" className="size-3" />
            </li>
            <li>
              <span className="text-gray-300 cursor-default transition hover:text-gray-500">
                {currentTabObj.title}
              </span>
            </li>
          </>
        )}

      </ul>
    </div>
  );
};