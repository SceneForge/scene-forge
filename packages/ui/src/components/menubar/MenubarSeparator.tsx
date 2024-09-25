import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Separator } from "@radix-ui/react-menubar";

export type MenubarSeparatorProps = ComponentProps<
  typeof Separator
>;

const MenubarSeparator = ({
  className,
  ref,
  ...props
}: MenubarSeparatorProps) => {
  return (
    <Separator
      {...props}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      ref={ref}
    />
  );
};

export default MenubarSeparator;
