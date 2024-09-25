import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Overlay } from "@radix-ui/react-dialog";

export type SheetOverlayProps = ComponentProps<typeof Overlay>;

const SheetOverlay = ({
  className,
  ref,
  ...props
}: SheetOverlayProps) => {
  return (
    <Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
      ref={ref}
    />
  );
};
export default SheetOverlay;
