import { lazy } from "react";

export const Select = lazy(() => import("./Select"));
export type { SelectProps } from "./Select";

export const SelectContent = lazy(() => import("./SelectContent"));
export type { SelectContentProps } from "./SelectContent";

export const SelectGroup = lazy(() => import("./SelectGroup"));
export type { SelectGroupProps } from "./SelectGroup";

export const SelectItem = lazy(() => import("./SelectItem"));
export type { SelectItemProps } from "./SelectItem";

export const SelectLabel = lazy(() => import("./SelectLabel"));
export type { SelectLabelProps } from "./SelectLabel";

export const SelectScrollDownButton = lazy(() => import("./SelectScrollDownButton"));
export type { SelectScrollDownButtonProps } from "./SelectScrollDownButton";

export const SelectScrollUpButton = lazy(() => import("./SelectScrollUpButton"));
export type { SelectScrollUpButtonProps } from "./SelectScrollUpButton";

export const SelectSeparator = lazy(() => import("./SelectSeparator"));
export type { SelectSeparatorProps } from "./SelectSeparator";

export const SelectTrigger = lazy(() => import("./SelectTrigger"));
export type { SelectTriggerProps } from "./SelectTrigger";

export const SelectValue = lazy(() => import("./SelectValue"));
export type { SelectValueProps } from "./SelectValue";
