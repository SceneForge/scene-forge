import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type TableCaptionProps = ComponentProps<"caption">;

const TableCaption = ({
  className,
  ref,
  ...props
}: TableCaptionProps) => {
  return (
    <caption
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};

export default TableCaption;
