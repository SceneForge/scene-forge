import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type SheetFooterProps = HTMLAttributes<HTMLDivElement>;

const SheetFooter = ({
  className,
  ...props
}: SheetFooterProps) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);

export default SheetFooter;
