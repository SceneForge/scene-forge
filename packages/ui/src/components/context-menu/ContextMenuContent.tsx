import { cn } from "@/lib";
import { Content } from "@radix-ui/react-context-menu";
import { type ComponentProps, lazy } from "react";

export type ContextMenuContentProps = ComponentProps<
  typeof Content
>;

const ContextMenuPortal = lazy(() => import("./ContextMenuPortal"));

const ContextMenuContent = ({
  className,
  ref,
  ...props
}: ContextMenuContentProps) => {
  return (
    <ContextMenuPortal>
      <Content
        {...props}
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        ref={ref}
      />
    </ContextMenuPortal>
  );
};

export default ContextMenuContent;
