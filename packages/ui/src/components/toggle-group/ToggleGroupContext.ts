import type { toggleVariants } from "@/components/toggle";
import type { VariantProps } from "class-variance-authority";

import { createContext } from "react";

export const ToggleGroupContext = createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});
