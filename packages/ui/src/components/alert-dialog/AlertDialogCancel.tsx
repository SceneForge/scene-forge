import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Cancel } from "@radix-ui/react-alert-dialog";

import { buttonVariants } from "../button";

export type AlertDialogCancelProps = ComponentProps<typeof Cancel>;

const AlertDialogCancel = ({
  className,
  ref,
  ...props
}: AlertDialogCancelProps) => {
  return (
    <Cancel
      className={cn(
        buttonVariants({ variant: "outline" }),
        "mt-2 sm:mt-0",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default AlertDialogCancel;
