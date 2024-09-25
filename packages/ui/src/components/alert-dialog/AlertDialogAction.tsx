import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Action } from "@radix-ui/react-alert-dialog";

import { buttonVariants } from "../button";

export type AlertDialogActionProps = ComponentProps<typeof Action>;

const AlertDialogAction = ({
  className,
  ref,
  ...props
}: AlertDialogActionProps) => {
  return (
    <Action
      className={cn(buttonVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

export default AlertDialogAction;
