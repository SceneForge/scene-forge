import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Viewport } from "@radix-ui/react-toast";

export type ToastViewportProps = ComponentProps<typeof Viewport>;

const ToastViewport = ({
  className,
  ref,
  ...props
}: ToastViewportProps) => {
  return (
    <Viewport
      {...props}
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      ref={ref}
    />
  );
};

export default ToastViewport;
