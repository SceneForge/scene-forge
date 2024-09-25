import { lazy } from "react";

export const Popover = lazy(() => import("./Popover"));
export type { PopoverProps } from "./Popover";

export const PopoverContent = lazy(() => import("./PopoverContent"));
export type { PopoverContentProps } from "./PopoverContent";

export const PopoverTrigger = lazy(() => import("./PopoverTrigger"));
export type { PopoverTriggerProps } from "./PopoverTrigger";
