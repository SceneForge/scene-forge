import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Content } from "@radix-ui/react-tabs";

export type TabsContentProps = ComponentProps<typeof Content>;

const TabsContent = ({ className, ref, ...props }: TabsContentProps) => {
  return (
    <Content
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default TabsContent;
