import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement>;

const AlertDialogFooter = ({
  className,
  ...props
}: AlertDialogFooterProps) => {
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

export default AlertDialogFooter;
