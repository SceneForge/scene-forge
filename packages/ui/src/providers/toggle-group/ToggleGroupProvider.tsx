import type { PropsWithChildren } from "react";

import { ToggleGroupContext, type ToggleGroupContextType } from "@/contexts";

export type ToggleGroupProviderProps = PropsWithChildren<
  ToggleGroupContextType
>;

const ToggleGroupProvider = ({
  children,
  size,
  variant,
}: ToggleGroupProviderProps) => {
  return (
    <ToggleGroupContext.Provider value={{ size, variant }}>
      {children}
    </ToggleGroupContext.Provider>
  );
};

export default ToggleGroupProvider;
