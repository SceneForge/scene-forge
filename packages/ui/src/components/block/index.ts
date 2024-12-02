import { lazy } from "react";

export const Block = lazy(() => import("./Block"));
export type { BlockProps } from "./Block";

export { blockVariants } from "./blockVariants";
export type { BlockVariantsProps } from "./blockVariants";
