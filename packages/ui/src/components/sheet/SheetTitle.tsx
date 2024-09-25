import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Title } from "@radix-ui/react-dialog";

export type SheetTitleProps = ComponentProps<typeof Title>;

const SheetTitle = ({
  className,
  ref,
  ...props
}: SheetTitleProps) => {
  return (
    <Title
      className={cn("text-lg font-semibold text-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};

export default SheetTitle;
