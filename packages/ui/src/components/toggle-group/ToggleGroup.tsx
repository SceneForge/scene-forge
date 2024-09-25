import type { toggleVariants } from "@/components/toggle";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-toggle-group";

import { ToggleGroupContext } from "./ToggleGroupContext";

export type ToggleGroupProps =
  & ComponentProps<typeof Root>
  & VariantProps<typeof toggleVariants>;

const ToggleGroup = ({
  children,
  className,
  ref,
  size,
  variant,
  ...props
}: ToggleGroupProps) => {
  return (
    <Root
      {...props}
      className={cn("flex items-center justify-center gap-1", className)}
      ref={ref}
    >
      <ToggleGroupContext.Provider value={{ size, variant }}>
        {children}
      </ToggleGroupContext.Provider>
    </Root>
  );
};

export default ToggleGroup;
