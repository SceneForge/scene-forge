import type { FieldValues } from "@/types";

import { FormFieldProvider } from "@/providers";
import {
  Controller,
  type ControllerProps,
  type FieldPath,
} from "react-hook-form";

export type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName>;

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldProvider name={name}>
      <Controller name={name} {...props} />
    </FormFieldProvider>
  );
};

export default FormField;
