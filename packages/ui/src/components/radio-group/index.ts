import { lazy } from "react";

export const RadioGroup = lazy(() => import("./RadioGroup"));
export type { RadioGroupProps } from "./RadioGroup";

export const RadioGroupItem = lazy(() => import("./RadioGroupItem"));
export type { RadioGroupItemProps } from "./RadioGroupItem";
