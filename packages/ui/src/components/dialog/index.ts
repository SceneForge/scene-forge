import { lazy } from "react";

export const Dialog = lazy(() => import("./Dialog"));
export type { DialogProps } from "./Dialog";

export const DialogClose = lazy(() => import("./DialogClose"));
export type { DialogCloseProps } from "./DialogClose";

export const DialogContent = lazy(() => import("./DialogContent"));
export type { DialogContentProps } from "./DialogContent";

export const DialogDescription = lazy(() => import("./DialogDescription"));
export type { DialogDescriptionProps } from "./DialogDescription";

export const DialogFooter = lazy(() => import("./DialogFooter"));
export type { DialogFooterProps } from "./DialogFooter";

export const DialogHeader = lazy(() => import("./DialogHeader"));
export type { DialogHeaderProps } from "./DialogHeader";

export const DialogOverlay = lazy(() => import("./DialogOverlay"));
export type { DialogOverlayProps } from "./DialogOverlay";

export const DialogPortal = lazy(() => import("./DialogPortal"));
export type { DialogPortalProps } from "./DialogPortal";

export const DialogTitle = lazy(() => import("./DialogTitle"));
export type { DialogTitleProps } from "./DialogTitle";

export const DialogTrigger = lazy(() => import("./DialogTrigger"));
export type { DialogTriggerProps } from "./DialogTrigger";
