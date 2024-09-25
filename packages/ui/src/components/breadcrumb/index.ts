import { lazy } from "react";

export const Breadcrumb = lazy(() => import("./Breadcrumb"));
export type { BreadcrumbProps } from "./Breadcrumb";

export const BreadcrumbEllipsis = lazy(() => import("./BreadcrumbEllipsis"));
export type { BreadcrumbEllipsisProps } from "./BreadcrumbEllipsis";

export const BreadcrumbItem = lazy(() => import("./BreadcrumbItem"));
export type { BreadcrumbItemProps } from "./BreadcrumbItem";

export const BreadcrumbLink = lazy(() => import("./BreadcrumbLink"));
export type { BreadcrumbLinkProps } from "./BreadcrumbLink";

export const BreadcrumbList = lazy(() => import("./BreadcrumbList"));
export type { BreadcrumbListProps } from "./BreadcrumbList";

export const BreadcrumbPage = lazy(() => import("./BreadcrumbPage"));
export type { BreadcrumbPageProps } from "./BreadcrumbPage";

export const BreadcrumbSeparator = lazy(() => import("./BreadcrumbSeparator"));
export type { BreadcrumbSeparatorProps } from "./BreadcrumbSeparator";
