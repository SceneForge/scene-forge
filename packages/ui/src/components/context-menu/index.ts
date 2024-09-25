import { lazy } from "react";

export const ContextMenu = lazy(() => import("./ContextMenu"));
export type { ContextMenuProps } from "./ContextMenu";

export const ContextMenuCheckboxItem = lazy(() => import("./ContextMenuCheckboxItem"));
export type { ContextMenuCheckboxItemProps } from "./ContextMenuCheckboxItem";

export const ContextMenuContent = lazy(() => import("./ContextMenuContent"));
export type { ContextMenuContentProps } from "./ContextMenuContent";

export const ContextMenuGroup = lazy(() => import("./ContextMenuGroup"));
export type { ContextMenuGroupProps } from "./ContextMenuGroup";

export const ContextMenuItem = lazy(() => import("./ContextMenuItem"));
export type { ContextMenuItemProps } from "./ContextMenuItem";

export const ContextMenuLabel = lazy(() => import("./ContextMenuLabel"));
export type { ContextMenuLabelProps } from "./ContextMenuLabel";

export const ContextMenuPortal = lazy(() => import("./ContextMenuPortal"));
export type { ContextMenuPortalProps } from "./ContextMenuPortal";

export const ContextMenuRadioGroup = lazy(() => import("./ContextMenuRadioGroup"));
export type { ContextMenuRadioGroupProps } from "./ContextMenuRadioGroup";

export const ContextMenuRadioItem = lazy(() => import("./ContextMenuRadioItem"));
export type { ContextMenuRadioItemProps } from "./ContextMenuRadioItem";

export const ContextMenuSeparator = lazy(() => import("./ContextMenuSeparator"));
export type { ContextMenuSeparatorProps } from "./ContextMenuSeparator";

export const ContextMenuShortcut = lazy(() => import("./ContextMenuShortcut"));
export type { ContextMenuShortcutProps } from "./ContextMenuShortcut";

export const ContextMenuSub = lazy(() => import("./ContextMenuSub"));
export type { ContextMenuSubProps } from "./ContextMenuSub";

export const ContextMenuSubContent = lazy(() => import("./ContextMenuSubContent"));
export type { ContextMenuSubContentProps } from "./ContextMenuSubContent";

export const ContextMenuSubTrigger = lazy(() => import("./ContextMenuSubTrigger"));
export type { ContextMenuSubTriggerProps } from "./ContextMenuSubTrigger";

export const ContextMenuTrigger = lazy(() => import("./ContextMenuTrigger"));
export type { ContextMenuTriggerProps } from "./ContextMenuTrigger";
