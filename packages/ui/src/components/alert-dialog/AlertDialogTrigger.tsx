import type { ComponentProps } from "react";

import { Trigger } from "@radix-ui/react-alert-dialog";

export type AlertDialogTriggerProps = ComponentProps<typeof Trigger>;

const AlertDialogTrigger = ({ ...props }: AlertDialogTriggerProps) => {
  return (
    <Trigger {...props} />
  );
};

export default AlertDialogTrigger;
