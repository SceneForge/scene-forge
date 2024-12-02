import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type LeadProps = ComponentProps<"p">;

const Lead = ({
  className,
  ref,
  ...props
}: LeadProps) => {
  return (
    <p
      className={cn("text-xl text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};

export default Lead;
