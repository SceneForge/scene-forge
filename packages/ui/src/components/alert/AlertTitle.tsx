import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";

export type AlertTitleProps = {
  ref?: Ref<HTMLHeadingElement>;
} & HTMLAttributes<HTMLHeadingElement>;

const AlertTitle = ({ className, ref, ...props }: AlertTitleProps) => {
  return (
    <h5
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      ref={ref}
      {...props}
    />
  );
};

export default AlertTitle;
