import type { SceneBlobData, SceneData } from "@sceneforge/data";

import { createContext, type Dispatch, type SetStateAction } from "react";

export type SceneTabContextType = {
  id: number;
  renameDialogOpen: boolean;
  scene?: SceneData;
  sceneBlob?: SceneBlobData;
  sceneMode: "edit" | "material" | "view";
  sceneTabLabel?: string;
  setRenameDialogOpen: Dispatch<SetStateAction<boolean>>;
  setSceneMode: Dispatch<SetStateAction<"edit" | "material" | "view">>;
};

export const SceneTabContext = createContext<SceneTabContextType>({
  id: 0,
  renameDialogOpen: false,
  sceneMode: "view",
  setRenameDialogOpen: () => void 0,
  setSceneMode: () => void 0,
});
