import { lazy } from "react";

export const App = lazy(() => import("./App"));
export type { AppProps } from "./App";
