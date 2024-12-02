import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type TableHeadProps = ComponentProps<"th">;

const TableHead = ({
  className,
  ref,
  ...props
}: TableHeadProps) => {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default TableHead;
