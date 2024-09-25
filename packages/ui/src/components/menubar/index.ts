import { lazy } from "react";

export const Menubar = lazy(() => import("./Menubar"));
export type { MenubarProps } from "./Menubar";

export const MenubarCheckboxItem = lazy(() => import("./MenubarCheckboxItem"));
export type { MenubarCheckboxItemProps } from "./MenubarCheckboxItem";

export const MenubarContent = lazy(() => import("./MenubarContent"));
export type { MenubarContentProps } from "./MenubarContent";

export const MenubarGroup = lazy(() => import("./MenubarGroup"));
export type { MenubarGroupProps } from "./MenubarGroup";

export const MenubarItem = lazy(() => import("./MenubarItem"));
export type { MenubarItemProps } from "./MenubarItem";

export const MenubarLabel = lazy(() => import("./MenubarLabel"));
export type { MenubarLabelProps } from "./MenubarLabel";

export const MenubarMenu = lazy(() => import("./MenubarMenu"));
export type { MenubarMenuProps } from "./MenubarMenu";

export const MenubarPortal = lazy(() => import("./MenubarPortal"));
export type { MenubarPortalProps } from "./MenubarPortal";

export const MenubarRadioGroup = lazy(() => import("./MenubarRadioGroup"));
export type { MenubarRadioGroupProps } from "./MenubarRadioGroup";

export const MenubarRadioItem = lazy(() => import("./MenubarRadioItem"));
export type { MenubarRadioItemProps } from "./MenubarRadioItem";

export const MenubarSeparator = lazy(() => import("./MenubarSeparator"));
export type { MenubarSeparatorProps } from "./MenubarSeparator";

export const MenubarShortcut = lazy(() => import("./MenubarShortcut"));
export type { MenubarShortcutProps } from "./MenubarShortcut";

export const MenubarSub = lazy(() => import("./MenubarSub"));
export type { MenubarSubProps } from "./MenubarSub";

export const MenubarSubContent = lazy(() => import("./MenubarSubContent"));
export type { MenubarSubContentProps } from "./MenubarSubContent";

export const MenubarSubTrigger = lazy(() => import("./MenubarSubTrigger"));
export type { MenubarSubTriggerProps } from "./MenubarSubTrigger";

export const MenubarTrigger = lazy(() => import("./MenubarTrigger"));
export type { MenubarTriggerProps } from "./MenubarTrigger";
