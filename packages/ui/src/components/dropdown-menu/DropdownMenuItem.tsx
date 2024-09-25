import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Item } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuItemProps = {
  inset?: boolean;
} & ComponentProps<typeof Item>;

const DropdownMenuItem = ({
  className,
  inset,
  ref,
  ...props
}: DropdownMenuItemProps) => {
  return (
    <Item
      {...props}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      ref={ref}
    />
  );
};

export default DropdownMenuItem;
