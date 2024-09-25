import type { ComponentProps } from "react";

import { Trigger } from "@radix-ui/react-popover";

export type PopoverTriggerProps = ComponentProps<typeof Trigger>;

const PopoverTrigger = ({ ...props }: PopoverTriggerProps) => {
  return (
    <Trigger {...props} />
  );
};

export default PopoverTrigger;
