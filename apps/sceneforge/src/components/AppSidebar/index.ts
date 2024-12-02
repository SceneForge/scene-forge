import { lazy } from "react";

export const AppSidebar = lazy(() => import("./AppSidebar"));
export type { AppSidebarProps } from "./AppSidebar";

export const AppSidebarContent = lazy(() => import("./AppSidebarContent"));
export const AppSidebarHeader = lazy(() => import("./AppSidebarHeader"));
export const AppSidebarFooter = lazy(() => import("./AppSidebarFooter"));
