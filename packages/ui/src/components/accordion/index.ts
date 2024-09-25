import { lazy } from "react";

export const Accordion = lazy(() => import("./Accordion"));
export type { AccordionProps } from "./Accordion";

export const AccordionContent = lazy(() => import("./AccordionContent"));
export type { AccordionContentProps } from "./AccordionContent";

export const AccordionItem = lazy(() => import("./AccordionItem"));
export type { AccordionItemProps } from "./AccordionItem";

export const AccordionTrigger = lazy(() => import("./AccordionTrigger"));
export type { AccordionTriggerProps } from "./AccordionTrigger";
