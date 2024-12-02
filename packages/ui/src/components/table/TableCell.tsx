import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type TableCellProps = ComponentProps<"td">;

const TableCell = ({
  className,
  ref,
  ...props
}: TableCellProps) => {
  return (
    <td
      className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
      ref={ref}
      {...props}
    />
  );
};

export default TableCell;
