import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";

export type CardDescriptionProps = {
  ref?: Ref<HTMLParagraphElement>;
} & HTMLAttributes<HTMLParagraphElement>;

const CardDescription = ({
  className,
  ref,
  ...props
}: CardDescriptionProps) => {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};

export default CardDescription;
