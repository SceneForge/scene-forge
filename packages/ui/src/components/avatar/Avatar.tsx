import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Root } from "@radix-ui/react-avatar";

export type AvatarProps = ComponentProps<typeof Root>;

const Avatar = ({ className, ref, ...props }: AvatarProps) => {
  return (
    <Root
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default Avatar;
