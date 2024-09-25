import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Description } from "@radix-ui/react-dialog";

export type DialogDescriptionProps = ComponentProps<typeof Description>;

const DialogDescription = ({
  className,
  ref,
  ...props
}: DialogDescriptionProps) => {
  return (
    <Description
      className={cn("text-sm text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};

export default DialogDescription;
