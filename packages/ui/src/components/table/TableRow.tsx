import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type TableRowProps = ComponentProps<"tr">;

const TableRow = ({
  className,
  ref,
  ...props
}: TableRowProps) => {
  return (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default TableRow;
