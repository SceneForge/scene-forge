import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type SidebarInsetProps = ComponentProps<"main">;

const SidebarInset = ({
  className,
  ref,
  ...props
}: SidebarInsetProps) => {
  return (
    <main
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default SidebarInset;
