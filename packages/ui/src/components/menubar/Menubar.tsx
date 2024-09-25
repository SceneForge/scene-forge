import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-menubar";

export type MenubarProps = ComponentProps<typeof Root>;

const Menubar = ({
  className,
  ref,
  ...props
}: MenubarProps) => {
  return (
    <Root
      {...props}
      className={cn(
        "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
        className
      )}
      ref={ref}
    />
  );
};

export default Menubar;
