import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>;

const DrawerPortal = ({ ...props }: DrawerPortalProps) => {
  return (
    <DrawerPrimitive.Portal {...props} />
  );
};

export default DrawerPortal;
