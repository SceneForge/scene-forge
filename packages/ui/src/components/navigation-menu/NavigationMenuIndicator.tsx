import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Indicator } from "@radix-ui/react-navigation-menu";

export type NavigationMenuIndicatorProps = ComponentProps<
  typeof Indicator
>;

const NavigationMenuIndicator = ({
  className,
  ref,
  ...props
}: NavigationMenuIndicatorProps) => {
  return (
    <Indicator
      {...props}
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )}
      ref={ref}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </Indicator>
  );
};

export default NavigationMenuIndicator;
