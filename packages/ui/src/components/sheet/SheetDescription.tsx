import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Description } from "@radix-ui/react-dialog";

export type SheetDescriptionProps = ComponentProps<typeof Description>;

const SheetDescription = ({
  className,
  ref,
  ...props
}: SheetDescriptionProps) => {
  return (
    <Description
      className={cn("text-sm text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};

export default SheetDescription;
