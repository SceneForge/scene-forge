import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;

const DrawerTitle = ({
  className,
  ref,
  ...props
}: DrawerTitleProps) => {
  return (
    <DrawerPrimitive.Title
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default DrawerTitle;
