import type { SceneData } from "@sceneforge/data";

import { createContext } from "react";

export type AppDataContextType = {
  scenes: SceneData[];
};

export const AppDataContext = createContext<AppDataContextType>({
  scenes: [],
});
