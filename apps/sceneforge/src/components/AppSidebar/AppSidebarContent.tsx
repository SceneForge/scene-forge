import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@sceneforge/ui";
import { LoaderIcon, PackagePlusIcon } from "lucide-react";

import { useAppData } from "../../hooks";
import { SceneSidebarItem } from "../SceneSidebarItem";

const AppSidebarContent = () => {
  const { scenes } = useAppData();
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Scenes</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton variant="outline">
                <PackagePlusIcon />
                <span>New Scene</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarSeparator decorative />
          <SidebarMenu>
            {scenes
              ? scenes.map((scene, index) => (
                <SceneSidebarItem key={`sidebar-key-${index}`} scene={scene} />
              ))
              : (
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <LoaderIcon />
                    <span>Loading...</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};

export default AppSidebarContent;
