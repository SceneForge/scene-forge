import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { SubTrigger } from "@radix-ui/react-context-menu";
import { ChevronRight } from "lucide-react";

export type ContextMenuSubTriggerProps = {
  inset?: boolean;
} & ComponentProps<
  typeof SubTrigger
>;

const ContextMenuSubTrigger = ({
  children,
  className,
  inset,
  ref,
  ...props
}: ContextMenuSubTriggerProps) => {
  return (
    <SubTrigger
      {...props}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )}
      ref={ref}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </SubTrigger>
  );
};

export default ContextMenuSubTrigger;
