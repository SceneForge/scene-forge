import type { ComponentProps, Ref } from "react";

import { cn } from "@/lib";

export type MarqueeWrapperProps = {
  ref?: Ref<HTMLDivElement>;
} & ComponentProps<"div">;

const MarqueeWrapper = ({
  children,
  className,
  ref,
  ...props
}: MarqueeWrapperProps) => {
  return (
    <div
      {...props}
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden bg-background",
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default MarqueeWrapper;
