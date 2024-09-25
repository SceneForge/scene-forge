import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Header, Trigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export type AccordionTriggerProps = ComponentProps<typeof Trigger>;

const AccordionTrigger = ({
  children,
  className,
  ref,
  ...props
}: AccordionTriggerProps) => (
  <Header className="flex">
    <Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </Trigger>
  </Header>
);

export default AccordionTrigger;
