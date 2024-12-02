import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type MainProps = ComponentProps<"main">;

const Main = ({
  className,
  ref,
  ...props
}: MainProps) => {
  return (
    <main
      className={cn("w-full h-full overflow-hidden", className)}
      ref={ref}
      {...props}
    />
  );
};

export default Main;
