import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Overlay } from "@radix-ui/react-alert-dialog";

export type AlertDialogOverlayProps = ComponentProps<typeof Overlay>;

const AlertDialogOverlay = ({
  className,
  ref,
  ...props
}: AlertDialogOverlayProps) => {
  return (
    <Overlay
      {...props}
      className={cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      ref={ref}
    />
  );
};

export default AlertDialogOverlay;
