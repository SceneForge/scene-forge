import { useCarousel } from "@/hooks";
import { cn } from "@/lib";
import { CarouselProvider } from "@/providers";
import { type ComponentProps } from "react";

export type CarouselProps = ComponentProps<"div"> & ComponentProps<typeof CarouselProvider>;

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
  const { handleKeyDown } = useCarousel();

  return (
    <CarouselProvider
      opts={opts}
      orientation={orientation}
      plugins={plugins}
      setApi={setApi}
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
    </CarouselProvider>
  );
};

export default Carousel;
