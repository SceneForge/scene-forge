import type { ComponentPropsWithRef } from "react";

import { Label } from "@/components";
import { useFormField } from "@/hooks";
import { cn } from "@/lib";

export type FormLabelProps = ComponentPropsWithRef<typeof Label>;

const FormLabel = ({ className, ref, ...props }: FormLabelProps) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      {...props}
      className={cn(error ? "text-destructive" : undefined, className)}
      htmlFor={formItemId}
      ref={ref}
    />
  );
};

export default FormLabel;
