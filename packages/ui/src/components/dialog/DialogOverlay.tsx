import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Overlay } from "@radix-ui/react-dialog";

export type DialogOverlayProps = ComponentProps<typeof Overlay>;

const DialogOverlay = ({
  className,
  ref,
  ...props
}: DialogOverlayProps) => {
  return (
    <Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default DialogOverlay;
