import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Viewport } from "@radix-ui/react-navigation-menu";

export type NavigationMenuViewportProps = ComponentProps<
  typeof Viewport
>;

const NavigationMenuViewport = ({
  className,
  ref,
  ...props
}: NavigationMenuViewportProps) => {
  return (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
      <Viewport
        {...props}
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        ref={ref}
      />
    </div>
  );
};

export default NavigationMenuViewport;
