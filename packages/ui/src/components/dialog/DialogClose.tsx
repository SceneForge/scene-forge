import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Close } from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export type DialogCloseProps = ComponentProps<typeof Close>;

const DialogClose = ({
  children,
  className,
  ref,
  ...props
}: DialogCloseProps) => {
  return (
    <Close
      {...props}
      className={cn("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", className)}
      ref={ref}
    >
      {children ?? (
        <>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </>
      )}
    </Close>
  );
};

export default DialogClose;
