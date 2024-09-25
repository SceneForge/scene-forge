import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Description } from "@radix-ui/react-alert-dialog";

export type AlertDialogDescriptionProps = ComponentProps<typeof Description>;

const AlertDialogDescription = ({
  className,
  ref,
  ...props
}: AlertDialogDescriptionProps) => {
  return (
    <Description
      className={cn("text-sm text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};

export default AlertDialogDescription;
