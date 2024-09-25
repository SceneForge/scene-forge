import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Fallback } from "@radix-ui/react-avatar";

export type AvatarFallbackProps = ComponentProps<typeof Fallback>;

const AvatarFallback = ({ className, ref, ...props }: AvatarFallbackProps) => {
  return (
    <Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default AvatarFallback;
