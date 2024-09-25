import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Trigger } from "@radix-ui/react-tabs";

export type TabsTriggerProps = ComponentProps<typeof Trigger>;

const TabsTrigger = ({ className, ref, ...props }: TabsTriggerProps) => {
  return (
    <Trigger
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default TabsTrigger;
