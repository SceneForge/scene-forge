import type { ComponentProps } from "react";

import { Portal } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuPortalProps = ComponentProps<typeof Portal>;

const DropdownMenuPortal = ({ ...props }: DropdownMenuPortalProps) => {
  return (
    <Portal {...props} />
  );
};

export default DropdownMenuPortal;
