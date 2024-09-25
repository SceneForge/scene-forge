import type { ComponentProps } from "react";

import { Sub } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuSubProps = ComponentProps<typeof Sub>;

const DropdownMenuSub = ({ ...props }: DropdownMenuSubProps) => {
  return (
    <Sub {...props} />
  );
};

export default DropdownMenuSub;
