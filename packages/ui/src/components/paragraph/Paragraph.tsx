import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type ParagraphProps = ComponentProps<"p">;

const Paragraph = ({
  className,
  ref,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      ref={ref}
      {...props}
    />
  );
};

export default Paragraph;
