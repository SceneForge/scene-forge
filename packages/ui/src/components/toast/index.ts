import { lazy } from "react";

export const Toast = lazy(() => import("./Toast"));
export type { ToastProps } from "./Toast";

export const ToastAction = lazy(() => import("./ToastAction"));
export type { ToastActionProps } from "./ToastAction";

export const ToastClose = lazy(() => import("./ToastClose"));
export type { ToastCloseProps } from "./ToastClose";

export const ToastDescription = lazy(() => import("./ToastDescription"));
export type { ToastDescriptionProps } from "./ToastDescription";

export const ToastProvider = lazy(() => import("./ToastProvider"));
export type { ToastProviderProps } from "./ToastProvider";

export const ToastTitle = lazy(() => import("./ToastTitle"));
export type { ToastTitleProps } from "./ToastTitle";

export const ToastViewport = lazy(() => import("./ToastViewport"));
export type { ToastViewportProps } from "./ToastViewport";

export { toast, useToast } from "./useToast";
