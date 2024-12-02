import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Content } from "@radix-ui/react-tooltip";

export type TooltipContentProps = ComponentProps<typeof Content>;

const TooltipContent = ({
  className,
  ref,
  sideOffset = 4,
  ...props
}: TooltipContentProps) => {
  return (
    <Content
      className={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

export default TooltipContent;
