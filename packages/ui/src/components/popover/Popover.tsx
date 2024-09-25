import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-popover";

export type PopoverProps = ComponentProps<typeof Root>;

const Popover = ({ ...props }: PopoverProps) => {
  return (
    <Root {...props} />
  );
};

export default Popover;
