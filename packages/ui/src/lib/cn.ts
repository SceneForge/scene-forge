import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  const result = twMerge(clsx(inputs));
  if (result === "") return;
  return result;
};
