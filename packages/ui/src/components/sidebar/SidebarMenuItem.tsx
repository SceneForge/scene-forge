import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarMenuItemProps = ComponentProps<"li">;

const SidebarMenuItem = ({
  className,
  ref,
  ...props
}: SidebarMenuItemProps) => {
  return (
    <li
      className={cn("group/menu-item relative", className)}
      data-sidebar="menu-item"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarMenuItem;
