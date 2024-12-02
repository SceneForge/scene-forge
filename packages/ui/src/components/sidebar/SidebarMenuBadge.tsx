import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarMenuBadgeProps = ComponentProps<"div">;

const SidebarMenuBadge = ({
  className,
  ref,
  ...props
}: SidebarMenuBadgeProps) => {
  return (
    <div
      className={cn(
        "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-sidebar="menu-badge"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarMenuBadge;
