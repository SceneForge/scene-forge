import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

export type LabelProps =
  & ComponentProps<typeof Root>
  & VariantProps<typeof labelVariants>;

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

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
