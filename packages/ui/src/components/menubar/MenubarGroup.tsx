import type { ComponentProps } from "react";

import { Group } from "@radix-ui/react-menubar";

export type MenubarGroupProps = ComponentProps<typeof Group>;

const MenubarGroup = ({ ...props }: MenubarGroupProps) => {
  return (
    <Group {...props} />
  );
};

export default MenubarGroup;
