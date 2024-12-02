import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { List } from "@radix-ui/react-tabs";

export type TabsListProps = {
  align?: "center" | "end" | "start";
} & ComponentProps<typeof List>;

const TabsList = ({ align = "center", className, ref, ...props }: TabsListProps) => {
  return (
    <List
      className={cn(
        "inline-flex h-10 items-center rounded-md bg-muted p-1 text-muted-foreground w-full",
        align === "start" && "justify-start",
        align === "end" && "justify-end",
        align === "center" && "justify-center",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default TabsList;
