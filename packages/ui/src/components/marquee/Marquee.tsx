import type { ComponentProps, Ref } from "react";

import { cn } from "@/lib";

export type MarqueeProps = {
  pauseOnHover?: boolean;
  ref?: Ref<HTMLDivElement>;
  repeat?: number;
  reverse?: boolean;
  vertical?: boolean;
} & ComponentProps<"div">;

const Marquee = ({
  children,
  className,
  pauseOnHover = false,
  ref,
  repeat = 4,
  reverse,
  vertical = false,
  ...props
}: MarqueeProps) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-col": vertical,
          "flex-row": !vertical,
        },
        className
      )}
      ref={ref}
    >
      {Array.from({ length: repeat })
        .fill(0)
        .map((_, index) => (
          <div
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "[animation-direction:reverse]": reverse,
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
            key={`marquee-repeat-${index}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export default Marquee;
