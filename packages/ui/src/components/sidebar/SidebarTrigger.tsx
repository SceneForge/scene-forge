import type { ComponentProps } from "react";

import { Button } from "@/components";
import { useSidebar } from "@/hooks";
import { cn } from "@/lib";
import { PanelLeft } from "lucide-react";

export type SidebarTriggerProps = ComponentProps<typeof Button>;

const SidebarTrigger = ({
  className,
  onClick,
  ref,
  ...props
}: SidebarTriggerProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className={cn("h-7 w-7", className)}
      data-sidebar="trigger"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      ref={ref}
      size="icon"
      variant="ghost"
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

export default SidebarTrigger;
