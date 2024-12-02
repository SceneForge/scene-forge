import type { FieldError } from "react-hook-form";

export type FieldState = {
  error?: FieldError;
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  isValidating: boolean;
};
