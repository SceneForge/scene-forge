import { useId, useMemo } from "react";

export const useCurrentId = (id?: string) => {
  const defaultId = useId();

  return useMemo(() => id ?? defaultId, [id, defaultId]);
};
