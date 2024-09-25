import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

const DrawerTrigger = ({ ...props }: DrawerTriggerProps) => {
  return (
    <DrawerPrimitive.Trigger {...props} />
  );
};

export default DrawerTrigger;
