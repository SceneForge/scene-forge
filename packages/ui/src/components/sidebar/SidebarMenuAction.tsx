import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";

export type SidebarMenuActionProps = {
  asChild?: boolean;
  showOnHover?: boolean;
} & ComponentProps<"button">;

const SidebarMenuAction = ({
  asChild = false,
  className,
  ref,
  showOnHover = false,
  ...props
}: SidebarMenuActionProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover
        && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      data-sidebar="menu-action"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarMenuAction;