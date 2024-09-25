import { cn } from "@/lib";
import { type ComponentProps, lazy } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

const DrawerPortal = lazy(() => import("./DrawerPortal"));
const DrawerOverlay = lazy(() => import("./DrawerOverlay"));

export type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>;

const DrawerContent = ({
  children,
  className,
  ref,
  ...props
}: DrawerContentProps) => {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        {...props}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          className
        )}
        ref={ref}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};

export default DrawerContent;
