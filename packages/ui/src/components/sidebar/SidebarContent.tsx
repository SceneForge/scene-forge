import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarContentProps = ComponentProps<"div">;

const SidebarContent = ({
  className,
  ref,
  ...props
}: SidebarContentProps) => {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      data-sidebar="content"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarContent;
