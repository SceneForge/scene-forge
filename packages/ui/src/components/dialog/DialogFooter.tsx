import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

const DialogFooter = ({
  className,
  ...props
}: DialogFooterProps) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
};

export default DialogFooter;
