import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-tabs";

export type TabsProps = ComponentProps<typeof Root>;

const Tabs = ({ className, ...props }: TabsProps) => {
  return (
    <Root {...props} className={cn("grow flex flex-col", className)} />
  );
};

export default Tabs;
