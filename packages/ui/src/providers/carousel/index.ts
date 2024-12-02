import { lazy } from "react";

export const CarouselProvider = lazy(() => import("./CarouselProvider"));
export type { CarouselProviderProps } from "./CarouselProvider";
