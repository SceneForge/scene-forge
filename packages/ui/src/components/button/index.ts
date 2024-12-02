import { lazy } from "react";

export const Button = lazy(() => import("./Button"));
export type { ButtonProps } from "./Button";

export { buttonVariants } from "./buttonVariants";
export type { ButtonVariantsProps } from "./buttonVariants";
