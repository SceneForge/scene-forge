import { lazy } from "react";

export const Sidebar = lazy(() => import("./Sidebar"));
export type { SidebarProps } from "./Sidebar";

export const SidebarContent = lazy(() => import("./SidebarContent"));
export type { SidebarContentProps } from "./SidebarContent";

export const SidebarFooter = lazy(() => import("./SidebarFooter"));
export type { SidebarFooterProps } from "./SidebarFooter";

export const SidebarGroup = lazy(() => import("./SidebarGroup"));
export type { SidebarGroupProps } from "./SidebarGroup";

export const SidebarGroupAction = lazy(() => import("./SidebarGroupAction"));
export type { SidebarGroupActionProps } from "./SidebarGroupAction";

export const SidebarGroupContent = lazy(() => import("./SidebarGroupContent"));
export type { SidebarGroupContentProps } from "./SidebarGroupContent";

export const SidebarGroupLabel = lazy(() => import("./SidebarGroupLabel"));
export type { SidebarGroupLabelProps } from "./SidebarGroupLabel";

export const SidebarHeader = lazy(() => import("./SidebarHeader"));
export type { SidebarHeaderProps } from "./SidebarHeader";

export const SidebarInput = lazy(() => import("./SidebarInput"));
export type { SidebarInputProps } from "./SidebarInput";

export const SidebarInset = lazy(() => import("./SidebarInset"));
export type { SidebarInsetProps } from "./SidebarInset";

export const SidebarMenu = lazy(() => import("./SidebarMenu"));
export type { SidebarMenuProps } from "./SidebarMenu";

export const SidebarMenuButton = lazy(() => import("./SidebarMenuButton"));
export type { SidebarMenuButtonProps } from "./SidebarMenuButton";

export const SidebarMenuItem = lazy(() => import("./SidebarMenuItem"));
export type { SidebarMenuItemProps } from "./SidebarMenuItem";

export const SidebarMenuSkeleton = lazy(() => import("./SidebarMenuSkeleton"));
export type { SidebarMenuSkeletonProps } from "./SidebarMenuSkeleton";

export const SidebarMenuSub = lazy(() => import("./SidebarMenuSub"));
export type { SidebarMenuSubProps } from "./SidebarMenuSub";

export const SidebarMenuSubButton = lazy(() => import("./SidebarMenuSubButton"));
export type { SidebarMenuSubButtonProps } from "./SidebarMenuSubButton";

export const SidebarMenuSubItem = lazy(() => import("./SidebarMenuSubItem"));
export type { SidebarMenuSubItemProps } from "./SidebarMenuSubItem";

export const SidebarRail = lazy(() => import("./SidebarRail"));
export type { SidebarRailProps } from "./SidebarRail";

export const SidebarSeparator = lazy(() => import("./SidebarSeparator"));
export type { SidebarSeparatorProps } from "./SidebarSeparator";

export const SidebarTrigger = lazy(() => import("./SidebarTrigger"));
export type { SidebarTriggerProps } from "./SidebarTrigger";

export const SidebarWrapper = lazy(() => import("./SidebarWrapper"));
export type { SidebarWrapperProps } from "./SidebarWrapper";
