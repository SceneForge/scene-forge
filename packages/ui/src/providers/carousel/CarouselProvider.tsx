import { type CarouselApi, CarouselContext, type CarouselCoreType } from "@/contexts";
import useEmblaCarousel from "embla-carousel-react";
import { type PropsWithChildren, useCallback, useEffect, useState } from "react";

export type CarouselProviderProps = PropsWithChildren<CarouselCoreType>;

const CarouselProvider = ({
  children,
  opts,
  orientation = "horizontal",
  plugins,
  setApi,
}: CarouselProviderProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrevious(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext
      value={{
        api,
        canScrollNext,
        canScrollPrev: canScrollPrevious,
        carouselRef,
        opts,
        orientation:
              orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollNext,
        scrollPrev: scrollPrevious,
      }}
    >
      {children}
    </CarouselContext>
  );
};

export default CarouselProvider;
