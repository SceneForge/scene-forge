import type { ComponentProps } from "react";

import { Input } from "@/components";
import { cn } from "@/lib";

export type SidebarInputProps = ComponentProps<typeof Input>;

const SidebarInput = ({
  className,
  ref,
  ...props
}: SidebarInputProps) => {
  return (
    <Input
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      data-sidebar="input"
      ref={ref}
      {...props}
    />
  );
};

export default SidebarInput;
