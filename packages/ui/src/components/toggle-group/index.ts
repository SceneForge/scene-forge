import { lazy } from "react";

export const ToggleGroup = lazy(() => import("./ToggleGroup"));
export type { ToggleGroupProps } from "./ToggleGroup";

export const ToggleGroupItem = lazy(() => import("./ToggleGroupItem"));
export type { ToggleGroupItemProps } from "./ToggleGroupItem";
