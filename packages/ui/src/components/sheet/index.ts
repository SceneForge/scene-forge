import { lazy } from "react";

export const Sheet = lazy(() => import("./Sheet"));
export type { SheetProps } from "./Sheet";

export const SheetClose = lazy(() => import("./SheetClose"));
export type { SheetCloseProps } from "./SheetClose";

export const SheetContent = lazy(() => import("./SheetContent"));
export type { SheetContentProps } from "./SheetContent";

export const SheetDescription = lazy(() => import("./SheetDescription"));
export type { SheetDescriptionProps } from "./SheetDescription";

export const SheetFooter = lazy(() => import("./SheetFooter"));
export type { SheetFooterProps } from "./SheetFooter";

export const SheetHeader = lazy(() => import("./SheetHeader"));
export type { SheetHeaderProps } from "./SheetHeader";

export const SheetOverlay = lazy(() => import("./SheetOverlay"));
export type { SheetOverlayProps } from "./SheetOverlay";

export const SheetPortal = lazy(() => import("./SheetPortal"));
export type { SheetPortalProps } from "./SheetPortal";

export const SheetTitle = lazy(() => import("./SheetTitle"));
export type { SheetTitleProps } from "./SheetTitle";

export const SheetTrigger = lazy(() => import("./SheetTrigger"));
export type { SheetTriggerProps } from "./SheetTrigger";
