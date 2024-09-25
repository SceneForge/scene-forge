import type { default as useEmblaCarousel, UseEmblaCarouselType } from "embla-carousel-react";

import { createContext } from "react";

export type EmblaCarouselApi = ReturnType<typeof useEmblaCarousel>[1];
export type EmblaCarouselRef = ReturnType<typeof useEmblaCarousel>[0];

export type CarouselApi = UseEmblaCarouselType[1];
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export type CarouselCoreProps = {
  opts?: CarouselOptions;
  orientation?: "horizontal" | "vertical";
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
};

export type CarouselContextProps = {
  api: EmblaCarouselApi;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselRef: EmblaCarouselRef;
  scrollNext: () => void;
  scrollPrev: () => void;
} & CarouselCoreProps;

export const CarouselContext = createContext<CarouselContextProps | null>(null);