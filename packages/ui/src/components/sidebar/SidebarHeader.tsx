import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarHeaderProps = ComponentProps<"div">;

const SidebarHeader = ({
  className,
  ref,
  ...props
}: SidebarHeaderProps) => {
  return (
    <div
      className={cn("flex flex-col gap-2 p-2", className)}
      data-sidebar="header"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarHeader;
