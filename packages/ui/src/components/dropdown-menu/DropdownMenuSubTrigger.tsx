import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { SubTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";

export type DropdownMenuSubTriggerProps = {
  inset?: boolean;
} & ComponentProps<typeof SubTrigger>;

const DropdownMenuSubTrigger = ({
  children,
  className,
  inset,
  ref,
  ...props
}: DropdownMenuSubTriggerProps) => {
  return (
    <SubTrigger
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        inset && "pl-8",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </SubTrigger>
  );
};

export default DropdownMenuSubTrigger;
