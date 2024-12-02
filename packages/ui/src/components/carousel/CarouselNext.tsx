import type { ComponentProps } from "react";

import { Button } from "@/components";
import { useCarousel } from "@/hooks";
import { cn } from "@/lib";
import { ArrowRight } from "lucide-react";

export type CarouselNextProps = ComponentProps<typeof Button>;

const CarouselNext = ({
  className,
  ref,
  size = "icon",
  variant = "outline",
  ...props
}: CarouselNextProps) => {
  const { canScrollNext, orientation, scrollNext } = useCarousel();

  return (
    <Button
      {...props}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      ref={ref}
      size={size}
      variant={variant}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};

export default CarouselNext;
