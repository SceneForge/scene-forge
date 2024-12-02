import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type TableHeaderProps = ComponentProps<"thead">;

const TableHeader = ({
  className,
  ref,
  ...props
}: TableHeaderProps) => {
  return (
    <thead
      className={cn("[&_tr]:border-b", className)}
      ref={ref}
      {...props}
    />
  );
};

export default TableHeader;
