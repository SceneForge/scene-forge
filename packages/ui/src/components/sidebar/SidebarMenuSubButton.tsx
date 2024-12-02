import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";

export type SidebarMenuSubButtonProps = {
  asChild?: boolean;
  isActive?: boolean;
  size?: "md" | "sm";
} & ComponentProps<"a">;

const SidebarMenuSubButton = ({
  asChild = false,
  className,
  isActive,
  ref,
  size = "md",
  ...props
}: SidebarMenuSubButtonProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-active={isActive}
      data-sidebar="menu-sub-button"
      data-size={size}
      ref={ref}
      {...props}
    />
  );
};

export default SidebarMenuSubButton;
