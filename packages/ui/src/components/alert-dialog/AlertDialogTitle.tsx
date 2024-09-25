import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Title } from "@radix-ui/react-alert-dialog";

export type AlertDialogTitleProps = ComponentProps<typeof Title>;

const AlertDialogTitle = ({
  className,
  ref,
  ...props
}: AlertDialogTitleProps) => {
  return (
    <Title
      className={cn("text-lg font-semibold", className)}
      ref={ref}
      {...props}
    />
  );
};

export default AlertDialogTitle;
