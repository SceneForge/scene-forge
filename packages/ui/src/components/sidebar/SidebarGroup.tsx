import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarGroupProps = ComponentProps<"div">;

const SidebarGroup = ({
  className,
  ref,
  ...props
}: SidebarGroupProps) => {
  return (
    <div
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      data-sidebar="group"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarGroup;
