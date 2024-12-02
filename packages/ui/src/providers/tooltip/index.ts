import { lazy } from "react";

export const TooltipProvider = lazy(() => import("./TooltipProvider"));
export type { TooltipProviderProps } from "./TooltipProvider";
