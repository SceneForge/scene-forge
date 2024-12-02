import type { ToggleVariantsProps } from "@/components";
import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { ToggleGroupProvider } from "@/providers";
import { Root } from "@radix-ui/react-toggle-group";

export type ToggleGroupProps =
  & ComponentProps<typeof Root>
  & ToggleVariantsProps;

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
      <ToggleGroupProvider size={size} variant={variant}>
        {children}
      </ToggleGroupProvider>
    </Root>
  );
};

export default ToggleGroup;
