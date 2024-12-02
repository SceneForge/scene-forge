import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type TableProps = ComponentProps<"table">;

const Table = ({
  className,
  ref,
  ...props
}: TableProps) => {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn("w-full caption-bottom text-sm", className)}
        ref={ref}
        {...props}
      />
    </div>
  );
};

export default Table;
