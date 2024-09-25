import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { PanelGroup } from "react-resizable-panels";

export type ResizablePanelGroupProps = ComponentProps<typeof PanelGroup>;

const ResizablePanelGroup = ({
  className,
  ...props
}: ResizablePanelGroupProps) => {
  return (
    <PanelGroup
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  );
};

export default ResizablePanelGroup;
