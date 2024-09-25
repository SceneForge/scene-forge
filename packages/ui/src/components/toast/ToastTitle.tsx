import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Title } from "@radix-ui/react-toast";

export type ToastTitleProps = ComponentProps<typeof Title>;

const ToastTitle = ({
  className,
  ref,
  ...props
}: ToastTitleProps) => {
  return (
    <Title
      className={cn("text-sm font-semibold", className)}
      ref={ref}
      {...props}
    />
  );
};

export default ToastTitle;
