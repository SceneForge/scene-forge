import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { ScrollDownButton } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export type SelectScrollDownButtonProps = ComponentProps<
  typeof ScrollDownButton
>;

const SelectScrollDownButton = ({
  className,
  ref,
  ...props
}: SelectScrollDownButtonProps) => {
  return (
    <ScrollDownButton
      {...props}
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      ref={ref}
    >
      <ChevronDown className="h-4 w-4" />
    </ScrollDownButton>
  );
};

export default SelectScrollDownButton;
