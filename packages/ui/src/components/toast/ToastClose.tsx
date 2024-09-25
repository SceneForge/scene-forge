import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Close } from "@radix-ui/react-toast";
import { X } from "lucide-react";

export type ToastCloseProps = ComponentProps<typeof Close>;

const ToastClose = ({
  className,
  ref,
  ...props
}: ToastCloseProps) => {
  return (
    <Close
      toast-close=""
      {...props}
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      )}
      ref={ref}
    >
      <X className="h-4 w-4" />
    </Close>
  );
};

export default ToastClose;