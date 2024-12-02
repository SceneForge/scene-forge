import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

const Skeleton = ({
  className,
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
};

export default Skeleton;
