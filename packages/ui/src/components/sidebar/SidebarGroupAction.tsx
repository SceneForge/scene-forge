import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";

export type SidebarGroupActionProps = {
  asChild?: boolean;
} & ComponentProps<"button">;

const SidebarGroupAction = ({
  asChild = false,
  className,
  ref,
  ...props
}: SidebarGroupActionProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-sidebar="group-action"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarGroupAction;
