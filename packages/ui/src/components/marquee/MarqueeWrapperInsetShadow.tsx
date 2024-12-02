import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type MarqueeWrapperInsetShadowProps = {
  orientation?: "block" | "inline";
  position?: "end" | "start";
} & Omit<ComponentProps<"div">, "children">;

const MarqueeWrapperInsetShadow = ({
  className,
  orientation,
  position,
  ref,
  ...props
}: MarqueeWrapperInsetShadowProps) => {
  return (
    <div
      {...props}
      className={cn(
        "pointer-events-none absolute",
        {
          "inset-x-0 h-1/3": orientation === "block",
          "inset-y-0 w-1/3": orientation === "inline",
        },
        {
          "bottom-0 bg-gradient-to-t": orientation === "block" && position === "end",
          "left-0 bg-gradient-to-r": orientation === "inline" && position === "start",
          "right-0 bg-gradient-to-l": orientation === "inline" && position === "end",
          "top-0 bg-gradient-to-b": orientation === "block" && position === "start",
        },
        "from-white dark:from-background",
        className
      )}
      ref={ref}
    />
  );
};

export default MarqueeWrapperInsetShadow;
