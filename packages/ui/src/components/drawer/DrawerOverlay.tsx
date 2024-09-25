import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>;

const DrawerOverlay = ({
  className,
  ref,
  ...props
}: DrawerOverlayProps) => {
  return (
    <DrawerPrimitive.Overlay
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      ref={ref}
      {...props}
    />
  );
};

export default DrawerOverlay;
