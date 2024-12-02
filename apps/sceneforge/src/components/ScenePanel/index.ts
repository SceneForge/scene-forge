import { lazy } from "react";

export const ScenePanel = lazy(() => import("./ScenePanel"));
export type { ScenePanelProps } from "./ScenePanel";

export const ScenePanelCanvas = lazy(() => import("./ScenePanelCanvas"));

export const ScenePanelDrawer = lazy(() => import("./ScenePanelDrawer"));
export type { ScenePanelDrawerProps } from "./ScenePanelDrawer";

export const ScenePanelSeparator = lazy(() => import("./ScenePanelSeparator"));
