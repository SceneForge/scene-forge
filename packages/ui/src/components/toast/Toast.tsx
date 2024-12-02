import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-toast";

import { toastVariants, type ToastVariantsProps } from "./toastVariants";

export type ToastProps =
  & ComponentProps<typeof Root>
  & ToastVariantsProps;

const Toast = ({
  className,
  ref,
  variant,
  ...props
}: ToastProps) => {
  return (
    <Root
      className={cn(toastVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
};

export default Toast;
