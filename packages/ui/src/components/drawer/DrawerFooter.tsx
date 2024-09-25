import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type DrawerFooterProps = HTMLAttributes<HTMLDivElement>;

const DrawerFooter = ({
  className,
  ...props
}: DrawerFooterProps) => {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
};

export default DrawerFooter;
