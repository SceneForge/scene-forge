import { lazy } from "react";

export const Card = lazy(() => import("./Card"));
export type { CardProps } from "./Card";

export const CardContent = lazy(() => import("./CardContent"));
export type { CardContentProps } from "./CardContent";

export const CardDescription = lazy(() => import("./CardDescription"));
export type { CardDescriptionProps } from "./CardDescription";

export const CardFooter = lazy(() => import("./CardFooter"));
export type { CardFooterProps } from "./CardFooter";

export const CardHeader = lazy(() => import("./CardHeader"));
export type { CardHeaderProps } from "./CardHeader";

export const CardTitle = lazy(() => import("./CardTitle"));
export type { CardTitleProps } from "./CardTitle";
