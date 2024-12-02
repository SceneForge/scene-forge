import { cn } from "@/lib";
import { X } from "lucide-react";
import { lazy } from "react";

import type { TabsTriggerProps } from "./TabsTrigger";

export type TabsTriggerCloseProps = TabsTriggerProps;

const TabsTrigger = lazy(() => import("./TabsTrigger"));

const TabsTriggerClose = ({ className, ...props }: TabsTriggerCloseProps) => {
  return (
    <div className="inline-flex items-center justify-center">
      <TabsTrigger
        {...props}
        className={cn("", className)}
      />
      <>
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </>
    </div>
  );
};

export default TabsTriggerClose;
