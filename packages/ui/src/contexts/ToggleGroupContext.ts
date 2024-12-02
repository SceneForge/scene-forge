import type { ToggleVariantsProps } from "@/components";

import { createContext } from "react";

export type ToggleGroupContextType = ToggleVariantsProps;

export const ToggleGroupContext = createContext<
  ToggleGroupContextType
>({
  size: "default",
  variant: "default",
});
