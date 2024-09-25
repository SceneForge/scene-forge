import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type BreadcrumbItemProps = ComponentProps<"li">;

const BreadcrumbItem = ({ className, ref, ...props }: BreadcrumbItemProps) => {
  return (
    <li
      {...props}
      className={cn("inline-flex items-center gap-1.5", className)}
      ref={ref}
    />
  );
};

export default BreadcrumbItem;
