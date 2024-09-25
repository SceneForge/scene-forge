import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { ScrollUpButton } from "@radix-ui/react-select";
import { ChevronUp } from "lucide-react";

export type SelectScrollUpButtonProps = ComponentProps<
  typeof ScrollUpButton
>;

const SelectScrollUpButton = ({
  className,
  ref,
  ...props
}: SelectScrollUpButtonProps) => {
  return (
    <ScrollUpButton
      {...props}
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      ref={ref}
    >
      <ChevronUp className="h-4 w-4" />
    </ScrollUpButton>
  );
};

export default SelectScrollUpButton;
