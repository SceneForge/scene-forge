import { useCallback, useContext } from "react";

import { AppTabsContext, type TabItem } from "../contexts";

export const useAppTab = () => {
  const {
    activeTab,
    setActiveTab,
    setTabs,
    tabs,
  } = useContext(AppTabsContext);

  const addTab = useCallback((tab: TabItem) => {
    setTabs((previousTabs) => {
      if (previousTabs.some(({ id }) => id === tab.id)) {
        return previousTabs;
      }
      return [...previousTabs, tab];
    });

    setActiveTab(tab.id);
  }, [setTabs, setActiveTab]);

  const closeTab = useCallback((tabId: string) => {
    setTabs(previousTabs => previousTabs.filter(({ id }) => id !== tabId));
  }, [setTabs]);

  return {
    activeTab,
    addTab,
    closeTab,
    setActiveTab,
    tabs,
  };
};
