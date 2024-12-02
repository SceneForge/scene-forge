import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib";

export type LinkProps = ComponentPropsWithRef<"a">;

const Link = ({
  children,
  className,
  href,
  ref,
  ...props
}: LinkProps) => {
  return (
    <a
      className={cn("text-blue-500 hover:underline", className)}
      href={href}
      ref={ref}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
