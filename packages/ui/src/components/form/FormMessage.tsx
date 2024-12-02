import type { ComponentPropsWithRef } from "react";

import { useFormField } from "@/hooks";
import { cn } from "@/lib";

export type FormMessageProps = ComponentPropsWithRef<"p">;

const FormMessage = ({
  children,
  className,
  ref,
  ...props
}: FormMessageProps) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      className={cn("text-sm font-medium text-destructive", className)}
      id={formMessageId}
      ref={ref}
      {...props}
    >
      {body}
    </p>
  );
};

export default FormMessage;
