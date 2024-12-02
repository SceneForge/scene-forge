import type { ComponentPropsWithRef } from "react";

import { useFormField } from "@/hooks";
import { cn } from "@/lib";

export type FormDescriptionProps = ComponentPropsWithRef<"p">;

const FormDescription = ({
  className,
  ref,
  ...props
}: FormDescriptionProps) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      {...props}
      className={cn("text-sm text-muted-foreground", className)}
      id={formDescriptionId}
      ref={ref}
    />
  );
};

export default FormDescription;
