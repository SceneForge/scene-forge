import { sceneLoader } from "@sceneforge/scene";
import { useCallback, useContext } from "react";

import { EngineContext } from "../contexts";

export const useEngine = () => {
  const {
    active,
    canvasRef,
    engineControllerRef,
    engineReady,
  } = useContext(EngineContext);

  const loadBlob = useCallback((sceneBlob: Blob) => {
    if (
      engineReady
      && engineControllerRef
      && engineControllerRef.current
      && engineControllerRef.current.scene
    ) {
      return sceneLoader(engineControllerRef.current.scene, sceneBlob);
    }
  }, [engineReady, engineControllerRef]);

  return {
    active,
    canvasRef,
    engineControllerRef,
    engineReady,
    loadBlob,
  };
};
