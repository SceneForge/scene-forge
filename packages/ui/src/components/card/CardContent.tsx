import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";

export type CardContentProps = {
  ref?: Ref<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

const CardContent = ({ className, ref, ...props }: CardContentProps) => {
  return (
    <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />
  );
};

export default CardContent;
