import type { ComponentProps } from "react";

import { Trigger } from "@radix-ui/react-dialog";

export type DialogTriggerProps = ComponentProps<typeof Trigger>;

const DialogTrigger = ({ ...props }: DialogTriggerProps) => {
  return (
    <Trigger {...props} />
  );
};

export default DialogTrigger;
