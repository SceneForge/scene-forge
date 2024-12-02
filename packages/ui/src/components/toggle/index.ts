import { lazy } from "react";

export const Toggle = lazy(() => import("./Toggle"));
export type { ToggleProps } from "./Toggle";

export { toggleVariants } from "./toggleVariants";
export type { ToggleVariantsProps } from "./toggleVariants";
