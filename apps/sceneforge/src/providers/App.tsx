import {
  type PropsWithChildren,
  useState,
} from "react";

import { AppContext } from "../contexts";
import { isOverlayVisible } from "../lib/isOverlayVisible";

export type AppProviderProps = PropsWithChildren<{
  languages?: readonly string[];
  theme?: string;
}>;

const AppProvider = ({
  children,
}: AppProviderProps) => {
  const name = import.meta.env.VITE_APP_NAME ?? "";
  const description = import.meta.env.VITE_APP_DESCRIPTION ?? "";
  const keywords = import.meta.env.VITE_APP_KEYWORDS ?? "";
  const author = import.meta.env.VITE_APP_AUTHOR ?? "";
  const version = import.meta.env.VITE_APP_VERSION ?? "";
  const development = import.meta.env.DEV ? true : false;
  const basePath = import.meta.env.VITE_APP_BASE_PATH ?? "/";
  const repository = import.meta.env.VITE_APP_REPOSITORY ?? "";

  const [overlayVisible, setOverlayVisible] = useState(isOverlayVisible());

  return (
    <AppContext
      value={{
        author,
        basePath,
        description,
        development,
        keywords,
        name,
        overlayVisible,
        repository,
        setOverlayVisible,
        version,
      }}
    >
      {children}
    </AppContext>
  );
};

export default AppProvider;
