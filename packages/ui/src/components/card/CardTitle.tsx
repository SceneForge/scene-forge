import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";

export type CardTitleProps = {
  ref?: Ref<HTMLHeadingElement>;
} & HTMLAttributes<HTMLHeadingElement>;

const CardTitle = ({ className, ref, ...props }: CardTitleProps) => {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default CardTitle;
