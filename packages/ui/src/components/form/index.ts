import { lazy } from "react";

export const Form = lazy(() => import("./Form"));
export type { FormProps } from "./Form";

export const FormControl = lazy(() => import("./FormControl"));
export type { FormControlProps } from "./FormControl";

export const FormDescription = lazy(() => import("./FormDescription"));
export type { FormDescriptionProps } from "./FormDescription";

export const FormField = lazy(() => import("./FormField"));
export type { FormFieldProps } from "./FormField";

export const FormItem = lazy(() => import("./FormItem"));
export type { FormItemProps } from "./FormItem";

export const FormLabel = lazy(() => import("./FormLabel"));
export type { FormLabelProps } from "./FormLabel";

export const FormMessage = lazy(() => import("./FormMessage"));
export type { FormMessageProps } from "./FormMessage";
