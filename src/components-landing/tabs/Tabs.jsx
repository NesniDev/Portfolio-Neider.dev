import { useStore } from '@nanostores/react';
import { openedTabs, activeTab, openTab, closeTab } from '../store/tabsStore';


export const FileCodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
  >
    <path
      d="M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M14 13L16 15L14 17M10 17L8 15L10 13"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowIcon = () => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M0.792725 12.2929L5.08562 8.00002L0.792725 3.70712L2.20694 2.29291L7.91405 8.00002L2.20694 13.7071L0.792725 12.2929Z" />
    <path d="M7.00006 15H15.0001V13H7.00006V15Z" />
  </svg>
);

export const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

// Diccionario para mantener la consistencia visual de los iconos y colores
const TAB_STYLES = {
  profile: { color: 'text-yellow-400', Icon: FileCodeIcon }, // Ajuste la ruta de sus iconos
  skills: { color: 'text-blue-600', Icon: FileCodeIcon },
  projects: { color: 'text-blue-400', Icon: FileCodeIcon },
  experience: { color: 'text-gray-400', Icon: FileCodeIcon },
  contact: { color: 'text-green-600', Icon: ArrowIcon }
};

export const ContentViewer = () => {
  // Suscripción al estado de Nano Stores
  const tabs = useStore(openedTabs);
  const current = useStore(activeTab);

  if (tabs.length === 0) return null; // Ocultar barra si no hay pestañas abiertas

  return (
    <div className="w-full flex overflow-x-auto border-b border-[#2a2a2a] bg-transparent custom-scrollbar">
      {tabs.map((tab) => {
        const isActive = tab.id === current;
        const { Icon, color } = TAB_STYLES[tab.id];

        return (
          <div
            key={tab.id}
            onClick={() => openTab(tab.id, tab.title)}
            className={`flex items-center p-3 gap-2 text-sm font-jetbrains border-r border-[#2a2a2a] cursor-pointer select-none transition-all duration-200 min-w-max group
              ${isActive
                ? 'bg-[rgba(255,255,255,0.03)] text-white border-t-2 border-t-amber-300'
                : 'text-gray-400 border-t-2 border-t-transparent hover:bg-[rgba(255,255,255,0.01)]'}`}
          >


            <div
              className={`flex items-center gap-2 size-4 ${color}`}
            >
              <Icon className="w-4 h-4" />
            </div>


            <h1 className="mt-0.5">{tab.title}</h1>

            <button
              onClick={(e) => {
                e.stopPropagation(); // Evita que al cerrar se active la pestaña
                closeTab(tab.id);
              }}
              className={`ml-2 p-1 rounded-md transition-opacity hover:bg-white/10 flex items-center justify-center
                ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              aria-label="Cerrar pestaña"
            >
              {/* Icono de cierre estático o texto */}
              <CloseIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
};