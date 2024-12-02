import { EngineController } from "@sceneforge/scene";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";

import { EngineContext } from "../contexts";

export type EngineProviderProps = PropsWithChildren<{
  active: boolean;
}>;

const EngineProvider = ({
  active,
  children,
}: EngineProviderProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [engineReady, setEngineReady] = useState(false);
  const engineControllerRef = useRef<EngineController | null>(null);
  const [engineLoadAttempt, setEngineLoadAttempt] = useState(0);

  useEffect(() => {
    if (active && canvasRef.current && !engineControllerRef.current) {
      engineControllerRef.current = new EngineController(
        canvasRef.current,
        true
      );
      engineControllerRef.current.start();
      setEngineReady(true);
    }
    else if (!active && engineControllerRef.current) {
      engineControllerRef.current.pause();
    }
    else if (active && engineControllerRef.current) {
      engineControllerRef.current.start();
      setEngineReady(true);
    }
    else if (active && !canvasRef.current && engineLoadAttempt < 5) {
      setTimeout(() => {
        setEngineLoadAttempt(previous => previous + 1);
      }, 500);
    }
    else if (active && !canvasRef.current && engineLoadAttempt >= 5) {
      throw new Error("Canvas not found");
    }
  }, [active, engineLoadAttempt]);

  useEffect(() => {
    return () => {
      if (engineControllerRef.current) {
        engineControllerRef.current.stop();
        engineControllerRef.current.engine.dispose();
      }
    };
  }, [engineControllerRef]);

  return (
    <EngineContext value={{
      active,
      canvasRef,
      engineControllerRef,
      engineLoadAttempt,
      engineReady,
      setEngineReady,
    }}
    >
      {children}
    </EngineContext>
  );
};

export default EngineProvider;
