import { lazy } from "react";

export const Badge = lazy(() => import("./Badge"));
export type { BadgeProps } from "./Badge";

export { badgeVariants } from "./badgeVariants";
export type { BadgeVariantsProps } from "./badgeVariants";
