import { type ComponentType, createContext, type Dispatch, type SetStateAction } from "react";

export type TabProps = {
  active?: boolean;
  id: string;
  label: string;
};

export type TabItem = {
  content: ComponentType<TabProps>;
  icon?: string;
  id: string;
  label: string;
};

export type AppTabsContextType = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  setTabs: Dispatch<SetStateAction<TabItem[]>>;
  tabs: TabItem[];
};

export const AppTabsContext = createContext<AppTabsContextType>({
  activeTab: "home",
  setActiveTab: () => void 0,
  setTabs: () => void 0,
  tabs: [],
});
