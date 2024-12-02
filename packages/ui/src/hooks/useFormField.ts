import type { FieldState, FieldValues } from "@/types";

import { FormFieldContext, type FormFieldContextType, FormItemContext } from "@/contexts";
import { type Context, useContext, useMemo } from "react";
import { type FieldPath, useFormContext } from "react-hook-form";

export const useFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>() => {
  const fieldContext = useContext<FormFieldContextType<TFieldValues, TName>>(
    (FormFieldContext as unknown) as
      Context<FormFieldContextType<TFieldValues, TName>>
  );

  const { id } = useContext(FormItemContext);

  const {
    formState,
    getFieldState,

  } = useFormContext<TFieldValues, unknown>();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormFieldProvider>.");
  }

  const { name } = fieldContext;

  if (!name) {
    throw new Error("useFormField should be used within <FormField> with a name");
  }

  const fieldState: FieldState = getFieldState(name, formState);

  const formDescriptionId = useMemo(() => `${id}-form-item-description`, [id]);
  const formItemId = useMemo(() => `${id}-form-item`, [id]);
  const formMessageId = useMemo(() => `${id}-form-item-message`, [id]);

  return {
    formDescriptionId,
    formItemId,
    formMessageId,
    id,
    name,
    ...fieldState,
  };
};
