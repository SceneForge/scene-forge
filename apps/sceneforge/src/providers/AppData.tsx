import type { PropsWithChildren } from "react";

import { useLiveQuery } from "@sceneforge/data";

import { AppDataContext } from "../contexts";

export type AppDataProviderProps = PropsWithChildren;

const AppDataProvider = ({ children }: AppDataProviderProps) => {
  const scenes = useLiveQuery(db => db.scene.toArray(), []);

  return (
    <AppDataContext value={{
      scenes: scenes ?? [],
    }}
    >
      {children}
    </AppDataContext>
  );
};

export default AppDataProvider;
