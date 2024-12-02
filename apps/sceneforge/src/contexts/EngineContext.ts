import type { EngineController } from "@sceneforge/scene";

import {
  createContext,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";

export type EngineContextType = {
  active: boolean;
  canvasRef?: RefObject<HTMLCanvasElement | null>;
  engineControllerRef?: RefObject<EngineController | null>;
  engineLoadAttempt: number;
  engineReady: boolean;
  setEngineReady: Dispatch<SetStateAction<boolean>>;
};

export const EngineContext = createContext<EngineContextType>({
  active: false,
  engineLoadAttempt: 0,
  engineReady: false,
  setEngineReady: () => void 0,
});
