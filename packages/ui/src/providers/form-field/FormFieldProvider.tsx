import type { PropsWithChildren } from "react";
import type { FieldPath, FieldValues } from "react-hook-form";

import { FormFieldContext } from "@/contexts";

export type FormFieldProviderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = PropsWithChildren<{
  name: TName;
}>;

const FormFieldProvider = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  name,
}: FormFieldProviderProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext value={{
      name,
    }}
    >
      {children}
    </FormFieldContext>
  );
};

export default FormFieldProvider;
