import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

const DialogHeader = ({
  className,
  ...props
}: DialogHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
};

export default DialogHeader;
