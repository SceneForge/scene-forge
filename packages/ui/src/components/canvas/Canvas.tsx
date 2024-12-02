import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type CanvasProps = ComponentProps<"canvas">;
const Canvas = ({ className, ref }: CanvasProps) => {
  return <canvas className={cn("h-full w-full", className)} ref={ref} />;
};

export default Canvas;
