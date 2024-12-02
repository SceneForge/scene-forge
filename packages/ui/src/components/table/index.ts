import { lazy } from "react";

export const Table = lazy(() => import("./Table"));
export type { TableProps } from "./Table";

export const TableBody = lazy(() => import("./TableBody"));
export type { TableBodyProps } from "./TableBody";

export const TableCaption = lazy(() => import("./TableCaption"));
export type { TableCaptionProps } from "./TableCaption";

export const TableCell = lazy(() => import("./TableCell"));
export type { TableCellProps } from "./TableCell";

export const TableFooter = lazy(() => import("./TableFooter"));
export type { TableFooterProps } from "./TableFooter";

export const TableHead = lazy(() => import("./TableHead"));
export type { TableHeadProps } from "./TableHead";

export const TableHeader = lazy(() => import("./TableHeader"));
export type { TableHeaderProps } from "./TableHeader";

export const TableRow = lazy(() => import("./TableRow"));
export type { TableRowProps } from "./TableRow";
