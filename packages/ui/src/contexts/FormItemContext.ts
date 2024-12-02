import { createContext } from "react";

export type FormItemContextType = {
  id: string;
};

export const FormItemContext = createContext<FormItemContextType>(
  {} as FormItemContextType
);
