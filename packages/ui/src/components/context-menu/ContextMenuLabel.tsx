import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Label } from "@radix-ui/react-context-menu";

export type ContextMenuLabelProps = {
  inset?: boolean;
} & ComponentProps<
  typeof Label
>;

const ContextMenuLabel = ({
  className,
  inset,
  ref,
  ...props
}: ContextMenuLabelProps) => {
  return (
    <Label
      {...props}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold text-foreground",
        inset && "pl-8",
        className
      )}
      ref={ref}
    />
  );
};

export default ContextMenuLabel;
