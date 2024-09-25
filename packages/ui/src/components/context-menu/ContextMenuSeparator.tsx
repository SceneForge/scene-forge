import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Separator } from "@radix-ui/react-context-menu";

export type ContextMenuSeparatorProps = ComponentProps<
  typeof Separator
>;

const ContextMenuSeparator = ({
  className,
  ref,
  ...props
}: ContextMenuSeparatorProps) => {
  return (
    <Separator
      {...props}
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      ref={ref}
    />
  );
};

export default ContextMenuSeparator;
