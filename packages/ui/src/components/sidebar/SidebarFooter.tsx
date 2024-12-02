import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarFooterProps = ComponentProps<"div">;

const SidebarFooter = ({
  className,
  ref,
  ...props
}: SidebarFooterProps) => {
  return (
    <div
      className={cn("flex flex-col gap-2 p-2", className)}
      data-sidebar="footer"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarFooter;
