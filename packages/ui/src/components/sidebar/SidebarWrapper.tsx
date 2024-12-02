import type { ComponentPropsWithRef, CSSProperties } from "react";

import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from "@/constants";
import { cn } from "@/lib";

export type SidebarWrapperProps = ComponentPropsWithRef<"div">;

const SidebarWrapper = ({
  children,
  className,
  ref,
  style,
  ...props
}: SidebarWrapperProps) => {
  return (
    <div
      className={cn(
        "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
        className
      )}
      ref={ref}
      style={
        {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default SidebarWrapper;
