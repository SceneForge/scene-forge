import { lazy } from "react";

export const Collapsible = lazy(() => import("./Collapsible"));
export type { CollapsibleProps } from "./Collapsible";

export const CollapsibleContnet = lazy(() => import("./CollapsibleContent"));
export type { CollapsibleContentProps } from "./CollapsibleContent";

export const CollapsibleTrigger = lazy(() => import("./CollapsibleTrigger"));
export type { CollapsibleTriggerProps } from "./CollapsibleTrigger";
