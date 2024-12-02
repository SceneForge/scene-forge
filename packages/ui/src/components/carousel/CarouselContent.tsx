import type { ComponentProps } from "react";

import { useCarousel } from "@/hooks";
import { cn } from "@/lib";

export type CarouselContentProps = ComponentProps<"div">;

const CarouselContent = ({
  className,
  ref,
  ...props
}: CarouselContentProps) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div
        {...props}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        ref={ref}
      />
    </div>
  );
};

export default CarouselContent;
