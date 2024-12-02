import type { ComponentPropsWithRef } from "react";

import { useFormField } from "@/hooks";
import { Slot } from "@radix-ui/react-slot";

export type FormControlProps = ComponentPropsWithRef<typeof Slot>;

const FormControl = ({ ref, ...props }: FormControlProps) => {
  const {
    error,
    formDescriptionId,
    formItemId,
    formMessageId,
  } = useFormField();

  return (
    <Slot
      {...props}
      aria-describedby={
        error
          ? `${formDescriptionId} ${formMessageId}`
          : `${formDescriptionId}`
      }
      aria-invalid={!!error}
      id={formItemId}
      ref={ref}
    />
  );
};

export default FormControl;
