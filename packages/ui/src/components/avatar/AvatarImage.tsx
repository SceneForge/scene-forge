import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Image } from "@radix-ui/react-avatar";

export type AvatarImageProps = ComponentProps<typeof Image>;

const AvatarImage = ({ className, ref, ...props }: AvatarImageProps) => {
  return (
    <Image
      className={cn("aspect-square h-full w-full", className)}
      ref={ref}
      {...props}
    />
  );
};

export default AvatarImage;
