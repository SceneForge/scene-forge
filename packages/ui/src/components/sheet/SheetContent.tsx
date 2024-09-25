import { cn } from "@/lib";
import { Content } from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, lazy } from "react";

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    defaultVariants: {
      side: "right",
    },
    variants: {
      side: {
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      },
    },
  }
);

const SheetPortal = lazy(() => import("./SheetPortal"));
const SheetOverlay = lazy(() => import("./SheetOverlay"));
const SheetClose = lazy(() => import("./SheetClose"));

export type SheetContentProps =
  & ComponentProps<typeof Content>
  & VariantProps<typeof sheetVariants>;

const SheetContent = ({
  children,
  className,
  ref,
  side = "right",
  ...props
}: SheetContentProps) => {
  return (
    <SheetPortal>
      <SheetOverlay />
      <Content
        className={cn(sheetVariants({ side }), className)}
        ref={ref}
        {...props}
      >
        {children}
        <SheetClose />
      </Content>
    </SheetPortal>
  );
};

export default SheetContent;
