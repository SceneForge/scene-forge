import { Engine } from "@babylonjs/core/Engines/engine";
import { Color4 } from "@babylonjs/core/Maths/math.color";
import { Scene } from "@babylonjs/core/scene";
import { type Nullable } from "@babylonjs/core/types";
import { useCallback, useMemo, useRef, type RefObject } from "react";

export const useEngine = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const engineRef = useRef<Nullable<Engine>>(null);
  const sceneRef = useRef<Nullable<Scene>>(null);

  const createEngine = useCallback(() => {
    if (canvasRef.current && !engineRef.current) {
      engineRef.current = new Engine(canvasRef.current, true, {
        stencil: true,
      });
    }
  }, [canvasRef, engineRef]);

  const createScene = useCallback(() => {
    if (engineRef.current && !sceneRef.current) {
      sceneRef.current = new Scene(engineRef.current);
      sceneRef.current.clearColor = Color4.FromHexString("#FFFFFF");
    }
  }, [engineRef, sceneRef]);

  const disposeEngine = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.dispose();
    }
  }, [engineRef]);

  const disposeScene = useCallback(() => {
    if (sceneRef.current) {
      sceneRef.current.dispose();
    }
  }, [sceneRef]);

  const resizeObserver = useMemo(() => {
    return new ResizeObserver(() => {
      if (engineRef.current) {
        engineRef.current.resize();
      }
    });
  }, [engineRef]);

  const renderSceneLoop = useCallback(() => {
    if (engineRef.current && sceneRef.current) {
      engineRef.current.runRenderLoop(() => {
        sceneRef.current?.render();
      });

      if (canvasRef.current) {
        resizeObserver.observe(canvasRef.current);
      }
    }
  }, [canvasRef, resizeObserver]);

  const stopRenderSceneLoop = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.stopRenderLoop();
    }
    if (canvasRef.current) {
      resizeObserver.unobserve(canvasRef.current);
    }
  }, [canvasRef, resizeObserver]);

  return {
    engineRef,
    sceneRef,
    resizeObserver,
    createEngine,
    createScene,
    disposeEngine,
    disposeScene,
    renderSceneLoop,
    stopRenderSceneLoop,
  };
};