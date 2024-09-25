import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib";
import { Item } from "@radix-ui/react-toggle-group";
import { type ComponentProps, useContext } from "react";

import { toggleVariants } from "../toggle/Toggle";
import { ToggleGroupContext } from "./ToggleGroupContext";

export type ToggleGroupItemProps =
  & ComponentProps<typeof Item>
  & VariantProps<typeof toggleVariants>;

const ToggleGroupItem = ({
  children,
  className,
  ref,
  size,
  variant,
  ...props
}: ToggleGroupItemProps) => {
  const {
    size: contextSize,
    variant: contextVariant,
  } = useContext(ToggleGroupContext);

  return (
    <Item
      {...props}
      className={cn(
        toggleVariants({
          size: contextSize || size,
          variant: contextVariant || variant,
        }),
        className
      )}
      ref={ref}
    >
      {children}
    </Item>
  );
};

export default ToggleGroupItem;
