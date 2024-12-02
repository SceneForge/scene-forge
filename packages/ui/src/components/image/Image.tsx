import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib";

export type ImageProps = ComponentPropsWithRef<"img">;

const Image = ({
  alt = "",
  className,
  ref,
  src,
  ...props
}: ImageProps) => {
  return (
    <img
      alt={alt}
      className={cn(className)}
      ref={ref}
      src={src}
      {...props}
    />
  );
};

export default Image;
