import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Content } from "@radix-ui/react-accordion";

export type AccordionContentProps = ComponentProps<typeof Content>;

const AccordionContent = ({
  children,
  className,
  ref,
  ...props
}: AccordionContentProps) => (
  <Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </Content>
);

export default AccordionContent;
