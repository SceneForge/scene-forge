import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Separator } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuSeparatorProps = ComponentProps<typeof Separator>;

const DropdownMenuSeparator = ({
  className,
  ref,
  ...props
}: DropdownMenuSeparatorProps) => {
  return (
    <Separator
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      ref={ref}
      {...props}
    />
  );
};

export default DropdownMenuSeparator;
