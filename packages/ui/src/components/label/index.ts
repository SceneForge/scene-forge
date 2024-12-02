import { lazy } from "react";

export const Label = lazy(() => import("./Label"));
export type { LabelProps } from "./Label";

export { labelVariants } from "./labelVariants";
export type { LabelVariantsProps } from "./labelVariants";
