import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Description } from "@radix-ui/react-toast";

export type ToastDescriptionProps = ComponentProps<typeof Description>;

const ToastDescription = ({
  className,
  ref,
  ...props
}: ToastDescriptionProps) => {
  return (
    <Description
      {...props}
      className={cn("text-sm opacity-90", className)}
      ref={ref}
    />
  );
};

export default ToastDescription;
