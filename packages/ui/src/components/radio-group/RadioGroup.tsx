import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-radio-group";

export type RadioGroupProps = ComponentProps<typeof Root>;

const RadioGroup = ({
  className,
  ref,
  ...props
}: RadioGroupProps) => {
  return (
    <Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
};

export default RadioGroup;
