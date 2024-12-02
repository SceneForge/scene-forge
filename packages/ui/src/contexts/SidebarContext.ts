import { createContext } from "react";

export type SidebarContextType = {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: "collapsed" | "expanded";
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<null | SidebarContextType>(null);
