import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { CheckboxItem, ItemIndicator } from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";

export type DropdownMenuCheckboxItemProps = ComponentProps<typeof CheckboxItem>;

const DropdownMenuCheckboxItem = ({
  checked,
  children,
  className,
  ref,
  ...props
}: DropdownMenuCheckboxItemProps) => {
  return (
    <CheckboxItem
      checked={checked}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <Check className="h-4 w-4" />
        </ItemIndicator>
      </span>
      {children}
    </CheckboxItem>
  );
};

export default DropdownMenuCheckboxItem;
