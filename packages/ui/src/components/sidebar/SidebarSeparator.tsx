import type { ComponentProps } from "react";

import { Separator } from "@/components";
import { cn } from "@/lib";

export type SidebarSeparatorProps = ComponentProps<typeof Separator>;

const SidebarSeparator = ({
  className,
  ref,
  ...props
}: SidebarSeparatorProps) => {
  return (
    <Separator
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      data-sidebar="separator"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarSeparator;
