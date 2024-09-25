import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Item } from "@radix-ui/react-accordion";

export type AccordionItemProps = ComponentProps<typeof Item>;

const AccordionItem = ({ className, ref, ...props }: AccordionItemProps) => {
  return (
    <Item
      className={cn("border-b", className)}
      ref={ref}
      {...props}
    />
  );
};

export default AccordionItem;
