import { cn } from "@/lib";
import { Content } from "@radix-ui/react-dialog";
import { type ComponentProps, lazy } from "react";

export type DialogContentProps = ComponentProps<typeof Content>;

const DialogPortal = lazy(() => import("./DialogPortal"));
const DialogClose = lazy(() => import("./DialogClose"));
const DialogOverlay = lazy(() => import("./DialogOverlay"));

const DialogContent = ({
  children,
  className,
  ref,
  ...props
}: DialogContentProps) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <Content
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <DialogClose />
      </Content>
    </DialogPortal>
  );
};

export default DialogContent;
