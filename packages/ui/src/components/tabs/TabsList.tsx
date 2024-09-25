import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { List } from "@radix-ui/react-tabs";

export type TabsListProps = ComponentProps<typeof List>;

const TabsList = ({ className, ref, ...props }: TabsListProps) => {
  return (
    <List
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default TabsList;
