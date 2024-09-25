import { cn } from "@/lib";
import { Content } from "@radix-ui/react-alert-dialog";
import { type ComponentProps, lazy } from "react";

export type AlertDialogContentProps = ComponentProps<typeof Content>;

const AlertDialogPortal = lazy(() => import("./AlertDialogPortal"));
const AlertDialogOverlay = lazy(() => import("./AlertDialogOverlay"));

const AlertDialogContent = ({
  className,
  ref,
  ...props
}: AlertDialogContentProps) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <Content
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        ref={ref}
        {...props}
      />
    </AlertDialogPortal>
  );
};

export default AlertDialogContent;
