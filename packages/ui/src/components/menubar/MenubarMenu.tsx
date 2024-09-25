import type { ComponentProps } from "react";

import { Menu } from "@radix-ui/react-menubar";

export type MenubarMenuProps = ComponentProps<typeof Menu>;

const MenubarMenu = ({ ...props }: MenubarMenuProps) => {
  return (
    <Menu {...props} />
  );
};

export default MenubarMenu;
