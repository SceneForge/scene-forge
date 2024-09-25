import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Label } from "@radix-ui/react-menubar";

export type MenubarLabelProps = {
  inset?: boolean;
} & ComponentProps<typeof Label>;

const MenubarLabel = ({
  className,
  inset,
  ref,
  ...props
}: MenubarLabelProps) => {
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

export default MenubarLabel;
