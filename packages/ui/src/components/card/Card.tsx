import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";

export type CardProps = {
  ref?: Ref<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

const Card = ({ className, ref, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default Card;
