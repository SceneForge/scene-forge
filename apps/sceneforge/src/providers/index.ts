import { lazy } from "react";

export const AppProvider = lazy(() => import("./App"));
export type { AppProviderProps } from "./App";

export const AppDataProvider = lazy(() => import("./AppData"));
export type { AppDataProviderProps } from "./AppData";

export const AppInstallProvider = lazy(() => import("./AppInstall"));
export type { AppInstallProviderProps } from "./AppInstall";

export const AppTabsProvider = lazy(() => import("./AppTabs"));
export type { AppTabsProviderProps } from "./AppTabs";

export const EngineProvider = lazy(() => import("./Engine"));
export type { EngineProviderProps } from "./Engine";

export const SceneTabProvider = lazy(() => import("./SceneTab"));
export type { SceneTabProviderProps } from "./SceneTab";

export const ServiceWorkerProvider = lazy(() => import("./ServiceWorker"));
export type { MessageDataPromiseObjectType, ServiceWorkerProviderProps } from "./ServiceWorker";
