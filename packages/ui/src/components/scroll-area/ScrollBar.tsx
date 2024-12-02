import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";
import { ScrollAreaScrollbar, ScrollAreaThumb } from "@radix-ui/react-scroll-area";

export type ScrollBarProps = ComponentProps<typeof ScrollAreaScrollbar>;
const ScrollBar = ({ className, orientation = "vertical", ref, ...props }: ScrollBarProps) => {
  return (
    <ScrollAreaScrollbar
      className={cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical"
        && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal"
        && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      )}
      orientation={orientation}
      ref={ref}
      {...props}
    >
      <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaScrollbar>
  );
};

export default ScrollBar;
