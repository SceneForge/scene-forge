import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { MoreHorizontal } from "lucide-react";

export type BreadcrumbEllipsisProps = ComponentProps<"span">;

const BreadcrumbEllipsis = ({
  className,
  ref,
  ...props
}: BreadcrumbEllipsisProps) => {
  return (
    <span
      {...props}
      aria-hidden="true"
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      ref={ref}
      role="presentation"
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  );
};

export default BreadcrumbEllipsis;
