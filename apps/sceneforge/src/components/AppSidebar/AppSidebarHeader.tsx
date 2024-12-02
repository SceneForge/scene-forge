import { SidebarGroup, SidebarGroupAction, SidebarGroupLabel, SidebarHeader } from "@sceneforge/ui";
import { HouseIcon } from "lucide-react";
import { useCallback } from "react";

import { useAppTab } from "../../hooks";
import { HomeTab } from "../../tabs";

const AppSidebarHeader = () => {
  const { addTab } = useAppTab();

  const handleHomeClick = useCallback(() => {
    addTab({
      content: HomeTab,
      id: "home",
      label: "Home",
    });
  }, [addTab]);

  return (
    <SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel inert>
          Scene Forge
        </SidebarGroupLabel>
        <SidebarGroupAction onClick={handleHomeClick}>
          <HouseIcon />
        </SidebarGroupAction>
      </SidebarGroup>
    </SidebarHeader>
  );
};

export default AppSidebarHeader;
