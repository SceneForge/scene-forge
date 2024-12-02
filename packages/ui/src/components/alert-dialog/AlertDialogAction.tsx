import type { ComponentProps } from "react";

import { buttonVariants } from "@/components";
import { cn } from "@/lib";
import { Action } from "@radix-ui/react-alert-dialog";

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
