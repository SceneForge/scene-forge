import type { ComponentProps } from "react";

import { Group } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuGroupProps = ComponentProps<typeof Group>;

const DropdownMenuGroup = ({ ...props }: DropdownMenuGroupProps) => {
  return (
    <Group {...props} />
  );
};

export default DropdownMenuGroup;
