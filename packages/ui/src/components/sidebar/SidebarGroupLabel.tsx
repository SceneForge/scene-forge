import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";

export type SidebarGroupLabelProps = { asChild?: boolean } & ComponentProps<"div">;

const SidebarGroupLabel = ({
  asChild = false,
  className,
  ref,
  ...props }: SidebarGroupLabelProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      data-sidebar="group-label"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarGroupLabel;
