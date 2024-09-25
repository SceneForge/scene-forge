import type { ComponentProps } from "react";

import { Trigger } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuTriggerProps = ComponentProps<typeof Trigger>;

const DropdownMenuTrigger = ({ ...props }: DropdownMenuTriggerProps) => {
  return (
    <Trigger {...props} />
  );
};

export default DropdownMenuTrigger;
