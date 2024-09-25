import { lazy } from "react";

export const Tabs = lazy(() => import("./Tabs"));
export type { TabsProps } from "./Tabs";

export const TabsContent = lazy(() => import("./TabsContent"));
export type { TabsContentProps } from "./TabsContent";

export const TabsList = lazy(() => import("./TabsList"));
export type { TabsListProps } from "./TabsList";

export const TabsTrigger = lazy(() => import("./TabsTrigger"));
export type { TabsTriggerProps } from "./TabsTrigger";
