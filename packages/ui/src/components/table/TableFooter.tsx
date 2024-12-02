import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type TableFooterProps = ComponentProps<"tfoot">;

const TableFooter = ({
  className,
  ref,
  ...props
}: TableFooterProps) => {
  return (
    <tfoot
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default TableFooter;
