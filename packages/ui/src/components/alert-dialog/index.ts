import { lazy } from "react";

export const AlertDialog = lazy(() => import("./AlertDialog"));
export type { AlertDialogProps } from "./AlertDialog";

export const AlertDialogAction = lazy(() => import("./AlertDialogAction"));
export type { AlertDialogActionProps } from "./AlertDialogAction";

export const AlertDialogCancel = lazy(() => import("./AlertDialogCancel"));
export type { AlertDialogCancelProps } from "./AlertDialogCancel";

export const AlertDialogContnet = lazy(() => import("./AlertDialogContent"));
export type { AlertDialogContentProps } from "./AlertDialogContent";

export const AlertDialogDescription = lazy(() => import("./AlertDialogDescription"));
export type { AlertDialogDescriptionProps } from "./AlertDialogDescription";

export const AlertDialogFooter = lazy(() => import("./AlertDialogFooter"));
export type { AlertDialogFooterProps } from "./AlertDialogFooter";

export const AlertDialogHeader = lazy(() => import("./AlertDialogHeader"));
export type { AlertDialogHeaderProps } from "./AlertDialogHeader";

export const AlertDialogOverlay = lazy(() => import("./AlertDialogOverlay"));
export type { AlertDialogOverlayProps } from "./AlertDialogOverlay";

export const AlertDialogPortal = lazy(() => import("./AlertDialogPortal"));
export type { AlertDialogPortalProps } from "./AlertDialogPortal";

export const AlertDialogTitle = lazy(() => import("./AlertDialogTitle"));
export type { AlertDialogTitleProps } from "./AlertDialogTitle";

export const AlertDialogTrigger = lazy(() => import("./AlertDialogTrigger"));
export type { AlertDialogTriggerProps } from "./AlertDialogTrigger";
