import { lazy } from "react";

export const Tooltip = lazy(() => import("./Tooltip"));
export type { TooltipProps } from "./Tooltip";

export const TooltipContent = lazy(() => import("./TooltipContent"));
export type { TooltipContentProps } from "./TooltipContent";

export const TooltipTrigger = lazy(() => import("./TooltipTrigger"));
export type { TooltipTriggerProps } from "./TooltipTrigger";
