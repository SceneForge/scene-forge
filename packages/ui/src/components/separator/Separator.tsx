import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-separator";

export type SeparatorProps = ComponentProps<typeof Root>;

const Separator = ({
  className,
  decorative = true,
  orientation = "horizontal",
  ref,
  ...props
}: SeparatorProps) => {
  return (
    <Root
      {...props}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      decorative={decorative}
      orientation={orientation}
      ref={ref}
    />
  );
};

export default Separator;
