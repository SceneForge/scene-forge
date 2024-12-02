import { useDatabase } from "@sceneforge/data";
import { useCallback, useContext } from "react";

import { SceneTabContext } from "../contexts";

export const useSceneTab = () => {
  const {
    id,
    renameDialogOpen,
    scene,
    sceneBlob,
    sceneMode,
    sceneTabLabel,
    setRenameDialogOpen,
    setSceneMode,
  } = useContext(SceneTabContext);

  const db = useDatabase();

  const changeSceneName = useCallback(async (name: string) => {
    if (db && scene) {
      return await db.scene.update(scene.id, { name });
    }
  }, [db, scene]);

  const setViewSceneMode = useCallback(() => {
    setSceneMode("view");
  }, [setSceneMode]);

  const setEditSceneMode = useCallback(() => {
    setSceneMode("edit");
  }, [setSceneMode]);

  const setMaterialSceneMode = useCallback(() => {
    setSceneMode("material");
  }, [setSceneMode]);

  return {
    changeSceneName,
    id,
    renameDialogOpen,
    scene,
    sceneBlob,
    sceneMode,
    sceneTabLabel,
    setEditSceneMode,
    setMaterialSceneMode,
    setRenameDialogOpen,
    setViewSceneMode,
  };
};
