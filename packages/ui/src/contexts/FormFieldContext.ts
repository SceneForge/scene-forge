import type { FieldValues } from "@/types";

import { createContext } from "react";
import {
  type FieldPath,
} from "react-hook-form";

export type FormFieldContextType<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name?: TName;
};

export const FormFieldContext = createContext<FormFieldContextType>({});
