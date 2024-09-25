import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { ArrowLeft } from "lucide-react";

import { Button } from "../button";
import { useCarousel } from "./useCarousel";

export type CarouselPreviousProps = ComponentProps<typeof Button>;

const CarouselPrevious = ({
  className,
  ref,
  size = "icon",
  variant = "outline",
  ...props
}: CarouselPreviousProps) => {
  const { canScrollPrev, orientation, scrollPrev } = useCarousel();

  return (
    <Button
      {...props}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      ref={ref}
      size={size}
      variant={variant}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
};

export default CarouselPrevious;
