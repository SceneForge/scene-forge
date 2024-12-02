import { DOCK_DEFAULT_DISTANCE, DOCK_DEFAULT_MAGNIFICATION } from "@/constants";
import { cn } from "@/lib";
import { motion, useMotionValue } from "framer-motion";
import {
  Children,
  cloneElement,
  type ComponentPropsWithRef,
  isValidElement,
  lazy,
  type ReactNode,
} from "react";

import type { DockIconProps } from "./DockIcon";

import { type DockVariantProps, dockVariants } from "./dockVariants";

export type DockProps = {
  direction?: "bottom" | "middle" | "top";
  distance?: number;
  magnification?: number;
} & ComponentPropsWithRef<typeof motion.div> & DockVariantProps;

const DockIcon = lazy(() => import("./DockIcon"));

const Dock = ({
  children,
  className,
  direction = "bottom",
  distance = DOCK_DEFAULT_DISTANCE,
  magnification = DOCK_DEFAULT_MAGNIFICATION,
  ref,
  ...props
}: DockProps) => {
  const mouseX = useMotionValue(Number.MAX_SAFE_INTEGER);

  return (
    <motion.div
      {...props}
      className={cn(dockVariants({ className }), {
        "items-center": direction === "middle",
        "items-end": direction === "bottom",
        "items-start": direction === "top",
      })}
      onMouseLeave={() => mouseX.set(Number.MAX_SAFE_INTEGER)}
      onMouseMove={(event: { pageX: number }) => mouseX.set(event.pageX)}
      ref={ref}
    >
      {Children.map(children as ReactNode, (child) => {
        if (isValidElement(child) && child.type === DockIcon) {
          return cloneElement(child, {
            ...child.props as DockIconProps,
            distance: distance,
            magnification: magnification,
            mouseX,
          } as DockIconProps);
        }
        return child;
      })}
    </motion.div>
  );
};

export default Dock;
