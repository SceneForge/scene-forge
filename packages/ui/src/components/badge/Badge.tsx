import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";

import { badgeVariants, type BadgeVariantsProps } from "./badgeVariants";

type BadgeAttributes = BadgeVariantsProps
  & HTMLAttributes<HTMLDivElement>;

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
