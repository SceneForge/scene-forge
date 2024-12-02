import { cn } from "@/lib";
import { createElement, type HTMLAttributes } from "react";

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLAttributes<HTMLHeadingElement>;

const Heading = ({
  className,
  level = 1,
  ...props
}: HeadingProps) => {
  return createElement(`h${level}`, {
    className: cn(
      "scroll-m-20 tracking-tight",
      level === 1 ? "text-4xl font-extrabold" : "font-semibold",
      level === 2 && "border-b pb-2 text-3xl first:mt-0",
      level === 3 && "text-2xl",
      level === 4 && "text-xl",
      level === 5 && "text-md",
      className
    ),
    ...props,
  });
};

export default Heading;
