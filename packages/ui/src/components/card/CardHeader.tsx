import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";

export type CardHeaderProps = {
  ref?: Ref<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

const CardHeader = ({ className, ref, ...props }: CardHeaderProps) => {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      ref={ref}
      {...props}
    />
  );
};

export default CardHeader;
