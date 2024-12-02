import { lazy } from "react";

export const Carousel = lazy(() => import("./Carousel"));
export type { CarouselProps } from "./Carousel";

export const CarouselContent = lazy(() => import("./CarouselContent"));
export type { CarouselContentProps } from "./CarouselContent";

export const CarouselItem = lazy(() => import("./CarouselItem"));
export type { CarouselItemProps } from "./CarouselItem";

export const CarouselNext = lazy(() => import("./CarouselNext"));
export type { CarouselNextProps } from "./CarouselNext";

export const CarouselPrevious = lazy(() => import("./CarouselPrevious"));
export type { CarouselPreviousProps } from "./CarouselPrevious";
