import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

export type ToggleProps =
  & ComponentProps<typeof Root>
  & VariantProps<typeof toggleVariants>;

export const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 px-3",
        lg: "h-11 px-5",
        sm: "h-9 px-2.5",
      },
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
    },
  }
);

const Toggle = ({ className, ref, size, variant, ...props }: ToggleProps) => {
  return (
    <Root
      className={cn(toggleVariants({ className, size, variant }))}
      ref={ref}
      {...props}
    />
  );
};

export default Toggle;
