import { cn } from "@/lib";
import { Content } from "@radix-ui/react-dialog";
import { type ComponentProps, lazy } from "react";

import { sheetVariants, type SheetVariantsProps } from "./sheetVariants";

const SheetPortal = lazy(() => import("./SheetPortal"));
const SheetOverlay = lazy(() => import("./SheetOverlay"));
const SheetClose = lazy(() => import("./SheetClose"));

export type SheetContentProps =
  & ComponentProps<typeof Content>
  & SheetVariantsProps;

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
