import { lazy } from "react";

export const ThemeProvider = lazy(() => import("./ThemeProvider"));
export type { ThemeProviderProps } from "./ThemeProvider";
