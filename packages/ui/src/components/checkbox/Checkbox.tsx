import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Indicator, Root } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

export type CheckboxProps = ComponentProps<typeof Root>;

const Checkbox = ({ className, ref, ...props }: CheckboxProps) => {
  return (
    <Root
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      ref={ref}
      {...props}
    >
      <Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </Indicator>
    </Root>
  );
};

export default Checkbox;
