import { ToggleGroupContext } from "@/contexts";
import { useContext } from "react";

export const useToggleGroup = () => {
  const context = useContext(ToggleGroupContext);

  if (!context) {
    throw new Error("useToggleGroup must be used within a <ToggleGroupProvider>.");
  }

  return context;
};
