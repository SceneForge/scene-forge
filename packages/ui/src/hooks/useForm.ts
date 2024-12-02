import type { FieldValues } from "@/types";

import {
  type UseFormProps,
  type UseFormReturn,
  useForm as useRHForm,
} from "react-hook-form";

export const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
>(
  props?: UseFormProps<TFieldValues, TContext>
): UseFormReturn<TFieldValues, TContext, TTransformedValues> => {
  return useRHForm<TFieldValues, TContext, TTransformedValues>(props);
};
