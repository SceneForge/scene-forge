import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Label } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuLabelProps = {
  inset?: boolean;
} & ComponentProps<typeof Label>;

const DropdownMenuLabel = ({
  className,
  inset,
  ref,
  ...props
}: DropdownMenuLabelProps) => {
  return (
    <Label
      {...props}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      ref={ref}
    />
  );
};

export default DropdownMenuLabel;
