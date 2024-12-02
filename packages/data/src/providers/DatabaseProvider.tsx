import { type PropsWithChildren, useRef } from "react";

import { DatabaseContext } from "../context";
import { database } from "../database";

export type DatabaseProviderProps = PropsWithChildren;

const DatabaseProvider = ({ children }: DatabaseProviderProps) => {
  const db = useRef(database);

  return (
    <DatabaseContext value={{ db }}>
      {children}
    </DatabaseContext>
  );
};

export default DatabaseProvider;
