import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerDescriptionProps = ComponentProps<
  typeof DrawerPrimitive.Description
>;

const DrawerDescription = ({
  className,
  ref,
  ...props
}: DrawerDescriptionProps) => {
  return (
    <DrawerPrimitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};

export default DrawerDescription;
