import { cn } from "@/lib/cn";
import { Corner, Root, Viewport } from "@radix-ui/react-scroll-area";
import { type ComponentProps, lazy } from "react";

const ScrollBar = lazy(() => import("./ScrollBar"));

export type ScrollAreaProps = ComponentProps<typeof Root>;

const ScrollArea = ({
  children,
  className,
  ref,
  ...props
}: ScrollAreaProps) => {
  return (
    <Root
      className={cn("relative overflow-hidden", className)}
      ref={ref}
      {...props}
    >
      <Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </Viewport>
      <ScrollBar />
      <Corner />
    </Root>
  );
};

export default ScrollArea;
