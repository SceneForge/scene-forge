import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type AlertDialogHeaderProps = HTMLAttributes<HTMLDivElement>;

const AlertDialogHeader = ({
  className,
  ...props
}: AlertDialogHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
};

export default AlertDialogHeader;
