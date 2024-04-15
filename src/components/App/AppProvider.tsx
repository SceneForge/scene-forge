import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useState,
  type PropsWithChildren,
} from "react";
import { ContextMenuProvider } from "../ContextMenu";
import { ModelContextProvider } from "../ModelContext";
import { PanelProvider, type PanelProviderProps } from "../Panel";
import { TabPanelProvider, type TabComponent } from "../TabPanel";
import { AppInstallProvider } from "../AppInstall";
import { useTranslation } from "react-i18next";

export type AppProviderProps = PropsWithChildren<{
  userData: PanelProviderProps["userData"];
  languages?: readonly string[];
  homeComponent?: TabComponent;
}>;

export type AppContextType = {
  name?: string;
  description?: string;
  version?: string;
  dev?: boolean;
  resolvedLanguage?: string;
  dir?: string;
  setResolvedLanguage?: Dispatch<SetStateAction<string | undefined>>;
  setDir?: Dispatch<SetStateAction<string | undefined>>;
  languages?: readonly string[];
};

export const AppContext = createContext<AppContextType>({});

export const AppProvider = ({
  userData,
  languages,
  homeComponent,
  children,
}: AppProviderProps) => {
  const {
    i18n: { resolvedLanguage: i18nResolvedLanguage, dir: i18nDir },
  } = useTranslation();

  const [resolvedLanguage, setResolvedLanguage] = useState<string | undefined>(
    i18nResolvedLanguage
  );
  const [dir, setDir] = useState<string | undefined>(i18nDir());
  const name = import.meta.env.VITE_APP_NAME ?? "";
  const description = import.meta.env.VITE_APP_DESCRIPTION ?? "";
  const version = import.meta.env.VITE_APP_VERSION ?? "";
  const dev = import.meta.env.DEV ? true : false;

  return (
    <AppContext.Provider
      value={{
        name,
        description,
        version,
        dev,
        resolvedLanguage,
        setResolvedLanguage,
        dir,
        setDir,
        languages,
      }}
    >
      <AppInstallProvider>
        <PanelProvider title={name} userData={userData}>
          <ModelContextProvider>
            <ContextMenuProvider>
              <TabPanelProvider
                defaultTab={
                  homeComponent && {
                    id: "home",
                    title: name,
                    component: homeComponent,
                  }
                }
              >
                {children}
              </TabPanelProvider>
            </ContextMenuProvider>
          </ModelContextProvider>
        </PanelProvider>
      </AppInstallProvider>
    </AppContext.Provider>
  );
};
