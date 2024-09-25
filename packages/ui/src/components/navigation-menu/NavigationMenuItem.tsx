import type { ComponentProps } from "react";

import { Item } from "@radix-ui/react-navigation-menu";

export type NavigationMenuItemProps = ComponentProps<
  typeof Item
>;

const NavigationMenuItem = ({ ...props }: NavigationMenuItemProps) => {
  return (
    <Item {...props} />
  );
};

export default NavigationMenuItem;
