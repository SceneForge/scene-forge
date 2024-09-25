import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type MenubarShortcutProps = HTMLAttributes<HTMLSpanElement>;

const MenubarShortcut = ({
  className,
  ...props
}: MenubarShortcutProps) => {
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

export default MenubarShortcut;
