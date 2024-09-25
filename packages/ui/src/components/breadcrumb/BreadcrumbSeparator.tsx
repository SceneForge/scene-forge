import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { ChevronRight } from "lucide-react";

export type BreadcrumbSeparatorProps = ComponentProps<"li">;

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => {
  return (
    <li
      {...props}
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      role="presentation"
    >
      {children ?? <ChevronRight />}
    </li>
  );
};

export default BreadcrumbSeparator;
