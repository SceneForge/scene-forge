import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type TableBodyProps = ComponentProps<"tbody">;

const TableBody = ({
  className,
  ref,
  ...props
}: TableBodyProps) => {
  return (
    <tbody
      className={cn("[&_tr:last-child]:border-0", className)}
      ref={ref}
      {...props}
    />
  );
};

export default TableBody;
