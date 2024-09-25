import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Trigger } from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

export type NavigationMenuTriggerProps = ComponentProps<
  typeof Trigger
>;

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);

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
