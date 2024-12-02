import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Trigger } from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

import { navigationMenuTriggerStyle } from "./navigationMenuTriggerStyle";

export type NavigationMenuTriggerProps = ComponentProps<
  typeof Trigger
>;

const NavigationMenuTrigger = ({
  children,
  className,
  ref,
  ...props
}: NavigationMenuTriggerProps) => {
  return (
    <Trigger
      {...props}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      ref={ref}
    >
      {children}
      {" "}
      <ChevronDown
        aria-hidden="true"
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      />
    </Trigger>
  );
};

export default NavigationMenuTrigger;
