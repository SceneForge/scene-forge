import type { HTMLAttributes, Ref } from "react";

import { cn } from "@/lib";

export type AlertDescriptionProps = {
  ref?: Ref<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

const AlertDescription = ({
  className,
  ref,
  ...props
}: AlertDescriptionProps) => {
  return (
    <div
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      ref={ref}
      {...props}
    />
  );
};

export default AlertDescription;
