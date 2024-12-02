import { createContext, type Dispatch, type SetStateAction } from "react";

export type AppContextType = {
  author?: string;
  basePath: string;
  description?: string;
  development?: boolean;
  direction?: string;
  keywords?: string;
  name?: string;
  overlayVisible: boolean;
  repository?: string;
  setOverlayVisible: Dispatch<SetStateAction<boolean>>;
  version?: string;
};

export const AppContext = createContext<AppContextType>({
  basePath: "/",
  overlayVisible: false,
  setOverlayVisible: () => void 0,
});
