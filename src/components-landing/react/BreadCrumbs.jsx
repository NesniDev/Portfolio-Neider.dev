import { useStore } from '@nanostores/react';
import { activeTab, openedTabs } from '../store/tabsStore';

export const BreadCrumbs = () => {
  const currentId = useStore(activeTab);
  const tabs = useStore(openedTabs);

  const currentTabObj = tabs.find(tab => tab.id === currentId);

  return (
    <div className={` ${currentTabObj ? 'block' : 'hidden'} text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 border border-[#2a2a2a] border-l-0 pl-3 sm:pl-7 py-1.5 sm:py-2 font-jetbrains overflow-x-auto`}>
      <ul className={`${currentTabObj ? 'flex' : 'hidden'} items-center gap-2 text-xs sm:text-sm text-gray-400 whitespace-nowrap`}>

        <li>
          <span className="text-gray-400 cursor-default transition hover:text-gray-500">
            Portfolio
          </span>
        </li>
        <li>
          <img src="/icons/arrow-right.svg" alt="Arrow right" className="size-3" />
        </li>

        <li>
          <span className="text-gray-400 cursor-default transition hover:text-gray-500">
            src
          </span>
        </li>

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
