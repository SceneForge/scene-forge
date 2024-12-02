import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-toggle";

import { toggleVariants, type ToggleVariantsProps } from "./toggleVariants";

export type ToggleProps =
  & ComponentProps<typeof Root>
  & ToggleVariantsProps;

const Toggle = ({ className, ref, size, variant, ...props }: ToggleProps) => {
  return (
    <Root
      className={cn(toggleVariants({ className, size, variant }))}
      ref={ref}
      {...props}
    />
  );
};

export default Toggle;
