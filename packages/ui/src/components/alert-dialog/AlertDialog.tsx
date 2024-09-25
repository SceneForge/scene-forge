import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-alert-dialog";

export type AlertDialogProps = ComponentProps<typeof Root>;

const AlertDialog = ({ ...props }: AlertDialogProps) => {
  return (
    <Root {...props} />
  );
};

export default AlertDialog;
