import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Label } from "@radix-ui/react-select";

export type SelectLabelProps = ComponentProps<typeof Label>;

const SelectLabel = ({
  className,
  ref,
  ...props
}: SelectLabelProps) => {
  return (
    <Label
      {...props}
      className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
      ref={ref}
    />
  );
};

export default SelectLabel;
