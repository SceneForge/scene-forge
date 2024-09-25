import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type DrawerHeaderProps = HTMLAttributes<HTMLDivElement>;

const DrawerHeader = ({
  className,
  ...props
}: DrawerHeaderProps) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);

export default DrawerHeader;
