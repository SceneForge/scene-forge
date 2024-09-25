import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type ContextMenuShortcutProps = HTMLAttributes<HTMLSpanElement>;

const ContextMenuShortcut = ({
  className,
  ...props
}: ContextMenuShortcutProps) => {
  return (
    <span
      {...props}
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
    />
  );
};

export default ContextMenuShortcut;
