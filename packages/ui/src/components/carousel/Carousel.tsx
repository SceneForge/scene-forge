import { cn } from "@/lib";
import useEmblaCarousel from "embla-carousel-react";
import { type ComponentProps, type KeyboardEvent, useCallback, useEffect, useState } from "react";

import { type CarouselApi, CarouselContext, type CarouselCoreProps } from "./CarouselContext";

export type CarouselProps = CarouselCoreProps & ComponentProps<"div">;

const Carousel = ({
  children,
  className,
  opts,
  orientation = "horizontal",
  plugins,
  ref,
  setApi,
  ...props
}: CarouselProps) => {
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

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrevious();
      }
      else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrevious, scrollNext]
  );

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
    <CarouselContext.Provider
      value={{
        api: api,
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
      <div
        {...props}
        aria-roledescription="carousel"
        className={cn("relative", className)}
        onKeyDownCapture={handleKeyDown}
        ref={ref}
        role="region"
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
