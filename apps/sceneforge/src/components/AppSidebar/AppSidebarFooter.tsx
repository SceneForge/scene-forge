import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@sceneforge/ui";
import { InfoIcon, SettingsIcon } from "lucide-react";
import { useCallback } from "react";

import { useAppTab } from "../../hooks";
import { AboutTab, SettingsTab } from "../../tabs";

const AppSidebarFooter = () => {
  const { addTab } = useAppTab();
  const handleSettingsClick = useCallback(() => {
    addTab({
      content: SettingsTab,
      id: "settings",
      label: "Settings",
    });
  }, [addTab]);

  const handleAboutClick = useCallback(() => {
    addTab({
      content: AboutTab,
      id: "about",
      label: "About",
    });
  }, [addTab]);

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton onClick={handleSettingsClick}>
            <SettingsIcon />
            <span>Settings</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton onClick={handleAboutClick}>
            <InfoIcon />
            <span>About</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default AppSidebarFooter;
