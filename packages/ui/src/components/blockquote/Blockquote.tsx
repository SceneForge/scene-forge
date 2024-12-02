import type { ComponentProps } from "react";

import { cn } from "@/lib";

export type BlockquoteProps = ComponentProps<"blockquote">;

const Blockquote = ({
  className,
  ref,
  ...props
}: BlockquoteProps) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      ref={ref}
      {...props}
    />
  );
};

export default Blockquote;
