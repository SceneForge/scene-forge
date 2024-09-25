import { lazy } from "react";

export const ResizablePanel = lazy(() => import("./ResizablePanel"));
export type { ResizablePanelProps } from "./ResizablePanel";

export const ResizablePanelGroup = lazy(() => import("./ResizablePanelGroup"));
export type { ResizablePanelGroupProps } from "./ResizablePanelGroup";

export const ResizablePanelHandle = lazy(() => import("./ResizablePanelHandle"));
export type { ResizablePanelHandleProps } from "./ResizablePanelHandle";
