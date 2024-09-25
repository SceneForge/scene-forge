import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";

export type CardFooterProps = {
  ref?: Ref<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

const CardFooter = ({ className, ref, ...props }: CardFooterProps) => {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      ref={ref}
      {...props}
    />
  );
};

export default CardFooter;
