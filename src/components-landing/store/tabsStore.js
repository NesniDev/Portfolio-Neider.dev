import { atom } from 'nanostores';

// 1. Inicializamos con array vacío (se abrirán las pestañas al interactuar)
export const openedTabs = atom([
]);

// 2. Establecemos "welcome" como la pestaña activa desde el principio
export const activeTab = atom('welcome');

/**
 * Función centralizada para abrir una nueva pestaña
 */
export function openTab(id, title) {
  const currentTabs = openedTabs.get();

  // Si la pestaña no está abierta, la agregamos al array
  if (!currentTabs.find(tab => tab.id === id)) {
    openedTabs.set([...currentTabs, { id, title }]);
  }

  // Establecemos esta pestaña como la activa
  activeTab.set(id);
}

/**
 * Función centralizada para cerrar una pestaña
 */
export function closeTab(id) {
  const currentTabs = openedTabs.get();
  const filteredTabs = currentTabs.filter(tab => tab.id !== id);

  // Actualizamos el estado con la lista filtrada
  openedTabs.set(filteredTabs);

  // Lógica de usabilidad: Si cerramos la pestaña que estaba activa, saltar a la última disponible
  if (activeTab.get() === id) {
    if (filteredTabs.length > 0) {
      activeTab.set(filteredTabs[filteredTabs.length - 1].id);
    } else {
      activeTab.set(null); // No quedan pestañas abiertas
    }
  }
}