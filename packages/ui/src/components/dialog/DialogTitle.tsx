import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Title } from "@radix-ui/react-dialog";

export type DialogTitleProps = ComponentProps<typeof Title>;

const DialogTitle = ({
  className,
  ref,
  ...props
}: DialogTitleProps) => {
  return (
    <Title
      {...props}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      ref={ref}

    />
  );
};

export default DialogTitle;
