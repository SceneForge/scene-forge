import type { PropsWithChildren } from "react";

import {
  Sidebar,
  SidebarRail,
} from "@sceneforge/ui";

export type AppSidebarProps = PropsWithChildren;

const AppSidebar = ({ children }: AppSidebarProps) => {
  return (
    <Sidebar variant="inset">
      {children}
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
