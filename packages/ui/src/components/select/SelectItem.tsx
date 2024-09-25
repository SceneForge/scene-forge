import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Item, ItemIndicator, ItemText } from "@radix-ui/react-select";
import { Check } from "lucide-react";

export type SelectItemProps = ComponentProps<typeof Item>;

const SelectItem = ({
  children,
  className,
  ref,
  ...props
}: SelectItemProps) => {
  return (
    <Item
      {...props}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      ref={ref}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <Check className="h-4 w-4" />
        </ItemIndicator>
      </span>

      <ItemText>{children}</ItemText>
    </Item>
  );
};

export default SelectItem;
