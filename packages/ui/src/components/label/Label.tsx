import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-label";

import { labelVariants, type LabelVariantsProps } from "./labelVariants";

export type LabelProps =
  & ComponentProps<typeof Root>
  & LabelVariantsProps;

const Label = ({ className, ref, ...props }: LabelProps) => {
  return (
    <Root
      className={cn(labelVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

export default Label;
