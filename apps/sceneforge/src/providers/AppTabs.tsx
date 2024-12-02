import { type PropsWithChildren, useEffect, useState } from "react";

import { AppTabsContext, type TabItem } from "../contexts";
import { HomeTab } from "../tabs";

export type AppTabsProviderProps = PropsWithChildren;

const AppTabsProvider = ({ children }: AppTabsProviderProps) => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [tabs, setTabs] = useState<TabItem[]>([]);

  useEffect(() => {
    if (tabs.length === 0) {
      setTabs([
        {
          content: HomeTab,
          id: "home",
          label: "Home",
        },
      ]);
    }

    if (tabs.length > 0 && !tabs.some(tab => tab.id === activeTab)) {
      setActiveTab(tabs[0].id);
    }
  }, [activeTab, tabs, tabs.length]);

  return (
    <AppTabsContext.Provider value={{
      activeTab,
      setActiveTab,
      setTabs,
      tabs,
    }}
    >
      {children}
    </AppTabsContext.Provider>
  );
};

export default AppTabsProvider;
