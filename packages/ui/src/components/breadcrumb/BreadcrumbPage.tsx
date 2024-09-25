import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type BreadcrumbPageProps = ComponentProps<"span">;

const BreadcrumbPage = ({ className, ref, ...props }: BreadcrumbPageProps) => {
  return (
    <span
      {...props}
      aria-current="page"
      aria-disabled="true"
      className={cn("font-normal text-foreground", className)}
      ref={ref}
      role="link"
    />
  );
};

export default BreadcrumbPage;
