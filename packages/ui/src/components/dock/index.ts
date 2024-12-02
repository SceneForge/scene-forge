import { lazy } from "react";

export const Dock = lazy(() => import("./Dock"));
export type { DockProps } from "./Dock";

export const DockIcon = lazy(() => import("./DockIcon"));
export type { DockIconProps } from "./DockIcon";

export { dockVariants } from "./dockVariants";
export type { DockVariantProps } from "./dockVariants";
