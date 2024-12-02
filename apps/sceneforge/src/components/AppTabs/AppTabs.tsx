import { Separator, SidebarTrigger, Tabs, TabsContent, TabsList } from "@sceneforge/ui";

import { useAppTab } from "../../hooks";
import { AppTab } from "../AppTab";

const AppTabs = () => {
  const { activeTab, setActiveTab, tabs } = useAppTab();

  return (
    <Tabs
      activationMode="manual"
      onValueChange={setActiveTab}
      value={activeTab}
    >
      <TabsList align="start">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        {tabs.map(tab => (
          <AppTab key={tab.id} value={tab.id}>
            {tab.label}
          </AppTab>
        ))}
      </TabsList>
      {tabs.map(({ content: TabContent, id, label }) => (
        <TabsContent
          aria-hidden={activeTab !== id}
          forceMount
          hidden={activeTab !== id}
          key={id}
          value={id}
        >
          <TabContent active={activeTab === id} id={id} label={label} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default AppTabs;
