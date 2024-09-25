import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
  }
);

export type AlertProps = {
  ref?: Ref<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

const Alert = ({ className, ref, variant, ...props }: AlertProps) => {
  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      ref={ref}
      role="alert"
      {...props}
    />
  );
};

export default Alert;
