import { lazy } from "react";

export const Badge = lazy(() => import("./Badge"));
export type { BadgeProps } from "./Badge";
export { badgeVariants } from "./Badge";
