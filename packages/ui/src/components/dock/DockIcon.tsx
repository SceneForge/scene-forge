import { DOCK_DEFAULT_DISTANCE, DOCK_DEFAULT_MAGNIFICATION } from "@/constants";
import { cn } from "@/lib";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
} from "react";

export type DockIconProps = {
  className?: string;
  distance?: number;
  magnification?: number;
  mouseX?: MotionValue<number>;
  props?: PropsWithChildren;
  size?: number;
} & ComponentPropsWithoutRef<typeof motion.div>;

const DockIcon = ({
  children,
  className,
  distance = DOCK_DEFAULT_DISTANCE,
  magnification = DOCK_DEFAULT_MAGNIFICATION,
  mouseX,
  ...props
}: DockIconProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const defaultMouseX = useMotionValue(Number.MAX_SAFE_INTEGER);
  const currentMouseX = useMemo((): MotionValue<number> => {
    return mouseX ?? defaultMouseX;
  }, [mouseX, defaultMouseX]);

  const divBounds = useCallback((value: number) => {
    if (divRef.current) {
      const bounds = divRef.current
        ?.getBoundingClientRect() ?? {
        width: 0,
        x: 0,
      };
      return value - bounds.x - bounds.width / 2;
    }
    return value;
  }, [divRef]);

  const distanceCalc = useTransform(
    currentMouseX,
    // eslint-disable-next-line react-compiler/react-compiler
    divBounds
  );

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthSync, {
    damping: 12,
    mass: 0.1,
    stiffness: 150,
  });

  return (
    <motion.div
      {...props}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      ref={divRef}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default DockIcon;
