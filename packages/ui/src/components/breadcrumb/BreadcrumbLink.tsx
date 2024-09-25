import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";
import { type ComponentProps, createElement } from "react";

export type BreadcrumbLinkProps = {
  asChild?: boolean;
} & ComponentProps<"a">;

const BreadcrumbLink = ({
  asChild,
  className,
  ref,
  ...props
}: BreadcrumbLinkProps) => {
  return createElement(asChild ? Slot : "a", {
    ...props,
    className: cn("transition-colors hover:text-foreground", className),
    ref,
  });
};

export default BreadcrumbLink;
