import { lazy } from "react";

export const Drawer = lazy(() => import("./Drawer"));
export type { DrawerProps } from "./Drawer";

export const DrawerClose = lazy(() => import("./DrawerClose"));
export type { DrawerCloseProps } from "./DrawerClose";

export const DrawerContent = lazy(() => import("./DrawerContent"));
export type { DrawerContentProps } from "./DrawerContent";

export const DrawerDescription = lazy(() => import("./DrawerDescription"));
export type { DrawerDescriptionProps } from "./DrawerDescription";

export const DrawerFooter = lazy(() => import("./DrawerFooter"));
export type { DrawerFooterProps } from "./DrawerFooter";

export const DrawerHeader = lazy(() => import("./DrawerHeader"));
export type { DrawerHeaderProps } from "./DrawerHeader";

export const DrawerOverlay = lazy(() => import("./DrawerOverlay"));
export type { DrawerOverlayProps } from "./DrawerOverlay";

export const DrawerPortal = lazy(() => import("./DrawerPortal"));
export type { DrawerPortalProps } from "./DrawerPortal";

export const DrawerTitle = lazy(() => import("./DrawerTitle"));
export type { DrawerTitleProps } from "./DrawerTitle";

export const DrawerTrigger = lazy(() => import("./DrawerTrigger"));
export type { DrawerTriggerProps } from "./DrawerTrigger";
