import { CarouselContext } from "@/contexts";
import { type KeyboardEvent, useCallback, useContext } from "react";

export const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <CarouselProvider>.");
  }

  const { scrollNext, scrollPrev } = context;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      }
      else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  return {
    ...context,
    handleKeyDown,
  };
};
