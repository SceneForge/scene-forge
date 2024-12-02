import { Block, Canvas, ResizablePanel } from "@sceneforge/ui";
import { useEffect } from "react";

import { useEngine, useSceneTab } from "../../hooks";

const ScenePanelCanvas = () => {
  const {
    canvasRef,
    engineReady,
    loadBlob,
  } = useEngine();

  const {
    scene,
    sceneBlob,
    sceneTabLabel,
  } = useSceneTab();

  useEffect(() => {
    if (engineReady && sceneBlob && sceneBlob.blob) {
      loadBlob(sceneBlob.blob)?.catch((error) => {
        console.error(error);
      });
    }
  }, [sceneBlob, loadBlob, engineReady]);

  return (
    <ResizablePanel>
      {scene
        ? (
          <Canvas ref={canvasRef} />
        )
        : (
          <Block>
            Loading
            {" "}
            {sceneTabLabel}
            ...
          </Block>
        )}
    </ResizablePanel>
  );
};

export default ScenePanelCanvas;
