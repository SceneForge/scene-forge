import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarMenuProps = ComponentProps<"ul">;

const SidebarMenu = ({
  className,
  ref,
  ...props
}: SidebarMenuProps) => {
  return (
    <ul
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      data-sidebar="menu"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarMenu;
