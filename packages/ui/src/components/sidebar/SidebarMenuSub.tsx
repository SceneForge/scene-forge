import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarMenuSubProps = ComponentProps<"ul">;

const SidebarMenuSub = ({
  className,
  ref,
  ...props
}: SidebarMenuSubProps) => {
  return (
    <ul
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-sidebar="menu-sub"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarMenuSub;
