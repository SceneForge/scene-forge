import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type ListProps = ComponentProps<"ul">;

const List = ({
  className,
  ref,
  ...props
}: ListProps) => {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      ref={ref}
      {...props}
    />
  );
};

export default List;
