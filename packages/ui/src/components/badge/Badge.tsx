import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
    },
  }
);

type BadgeAttributes = HTMLAttributes<HTMLDivElement>
  & VariantProps<typeof badgeVariants>;

export type BadgeProps = {
  ref?: Ref<HTMLDivElement>;
} & BadgeAttributes;

const Badge = ({ className, ref, variant, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
};

export default Badge;
