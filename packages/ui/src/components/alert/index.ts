import { lazy } from "react";

export const Alert = lazy(() => import("./Alert"));
export type { AlertProps } from "./Alert";

export const AlertDescription = lazy(() => import("./AlertDescription"));
export type { AlertDescriptionProps } from "./AlertDescription";

export const AlertTitle = lazy(() => import("./AlertTitle"));
export type { AlertTitleProps } from "./AlertTitle";
