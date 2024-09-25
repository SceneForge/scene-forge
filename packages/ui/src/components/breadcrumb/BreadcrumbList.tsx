import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type BreadcrumbListProps = ComponentProps<"ol">;

const BreadcrumbList = ({ className, ref, ...props }: BreadcrumbListProps) => {
  return (
    <ol
      {...props}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )}
      ref={ref}
    />
  );
};

export default BreadcrumbList;
