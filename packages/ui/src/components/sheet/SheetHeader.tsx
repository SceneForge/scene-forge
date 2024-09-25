import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type SheetHeaderProps = HTMLAttributes<HTMLDivElement>;

const SheetHeader = ({
  className,
  ...props
}: SheetHeaderProps) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

export default SheetHeader;
