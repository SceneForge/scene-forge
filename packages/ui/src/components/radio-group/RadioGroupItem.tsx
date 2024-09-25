import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Indicator, Item } from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

export type RadioGroupItemProps = ComponentProps<typeof Item>;

const RadioGroupItem = ({
  className,
  ref,
  ...props
}: RadioGroupItemProps) => {
  return (
    <Item
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </Indicator>
    </Item>
  );
};

export default RadioGroupItem;
