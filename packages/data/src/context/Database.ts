import { createContext, type RefObject } from "react";

import type { Database } from "../database";

export type DatabaseContextType = {
  db: RefObject<Database | null>;
};

export const DatabaseContext = createContext<DatabaseContextType>({
  db: {
    current: null,
  },
});
