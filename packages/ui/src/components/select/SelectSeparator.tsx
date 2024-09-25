import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Separator } from "@radix-ui/react-select";

export type SelectSeparatorProps = ComponentProps<
  typeof Separator
>;

const SelectSeparator = ({
  className,
  ref,
  ...props
}: SelectSeparatorProps) => {
  return (
    <Separator
      {...props}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      ref={ref}
    />
  );
};

export default SelectSeparator;
