import type { ComponentProps } from "react";

import { cn } from "@/lib";

import { useCarousel } from "./useCarousel";

export type CarouselItemProps = ComponentProps<"div">;

const CarouselItem = ({ className, ref, ...props }: CarouselItemProps) => {
  const { orientation } = useCarousel();

  return (
    <div
      {...props}
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      ref={ref}
      role="group"
    />
  );
};

export default CarouselItem;
