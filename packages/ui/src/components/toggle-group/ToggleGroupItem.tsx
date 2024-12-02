import { toggleVariants, type ToggleVariantsProps } from "@/components";
import { useToggleGroup } from "@/hooks";
import { cn } from "@/lib";
import { Item } from "@radix-ui/react-toggle-group";
import { type ComponentProps } from "react";

export type ToggleGroupItemProps =
  & ComponentProps<typeof Item>
  & ToggleVariantsProps;

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
  } = useToggleGroup();

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
