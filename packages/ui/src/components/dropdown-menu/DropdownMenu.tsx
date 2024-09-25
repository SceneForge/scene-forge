import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuProps = ComponentProps<typeof Root>;

const DropdownMenu = ({ ...props }: DropdownMenuProps) => {
  return (
    <Root {...props} />
  );
};

export default DropdownMenu;
