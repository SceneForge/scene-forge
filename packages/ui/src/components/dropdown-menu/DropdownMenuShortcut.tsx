import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type DropdownMenuShortcutProps = HTMLAttributes<HTMLSpanElement>;

const DropdownMenuShortcut = ({
  className,
  ...props
}: DropdownMenuShortcutProps) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};

export default DropdownMenuShortcut;
