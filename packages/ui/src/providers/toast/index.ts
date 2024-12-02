import { lazy } from "react";

export const ToastProvider = lazy(() => import("./ToastProvider"));
export type { ToastProviderProps } from "./ToastProvider";
