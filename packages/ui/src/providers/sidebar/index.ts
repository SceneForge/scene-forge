import { lazy } from "react";

export const SidebarProvider = lazy(() => import("./SidebarProvider"));
export type { SidebarProviderProps } from "./SidebarProvider";
