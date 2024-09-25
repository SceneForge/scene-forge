import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>;

const DrawerClose = ({ ...props }: DrawerCloseProps) => {
  return (
    <DrawerPrimitive.Close {...props} />
  );
};

export default DrawerClose;
