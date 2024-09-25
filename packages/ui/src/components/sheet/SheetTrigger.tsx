import type { ComponentProps } from "react";

import { Trigger } from "@radix-ui/react-dialog";

export type SheetTriggerProps = ComponentProps<typeof Trigger>;

const SheetTrigger = ({ ...props }: SheetTriggerProps) => {
  return (
    <Trigger {...props} />
  );
};

export default SheetTrigger;
