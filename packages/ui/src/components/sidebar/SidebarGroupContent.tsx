import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarGroupContentProps = ComponentProps<"div">;

const SidebarGroupContent = ({
  className,
  ref,
  ...props
}: SidebarGroupContentProps) => {
  return (
    <div
      className={cn("w-full text-sm", className)}
      data-sidebar="group-content"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarGroupContent;
