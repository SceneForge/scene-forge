import { lazy } from "react";

export const ScrollArea = lazy(() => import("./ScrollArea"));
export type { ScrollAreaProps } from "./ScrollArea";

export const ScrollBar = lazy(() => import("./ScrollBar"));
export type { ScrollBarProps } from "./ScrollBar";
