import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Icon, Trigger } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export type SelectTriggerProps = ComponentProps<
  typeof Trigger
>;

const SelectTrigger = ({
  children,
  className,
  ref,
  ...props
}: SelectTriggerProps) => {
  return (
    <Trigger
      {...props}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )}
      ref={ref}
    >
      {children}
      <Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </Icon>
    </Trigger>
  );
};

export default SelectTrigger;
