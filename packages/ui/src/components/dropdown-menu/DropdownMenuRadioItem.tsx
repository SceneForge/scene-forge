import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { ItemIndicator, RadioItem } from "@radix-ui/react-dropdown-menu";
import { Circle } from "lucide-react";

export type DropdownMenuRadioItemProps = ComponentProps<typeof RadioItem>;

const DropdownMenuRadioItem = ({
  children,
  className,
  ref,
  ...props
}: DropdownMenuRadioItemProps) => {
  return (
    <RadioItem
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </ItemIndicator>
      </span>
      {children}
    </RadioItem>
  );
};

export default DropdownMenuRadioItem;
