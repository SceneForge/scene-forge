import {
  type PropsWithChildren,
  useState,
} from "react";

import { AppInstall } from "../components";
import { AppInstallContext, type BeforeInstallPromptEvent } from "../contexts";

export type AppInstallProviderProps = PropsWithChildren;

const AppInstallProvider = ({ children }: AppInstallProviderProps) => {
  const [showInstall, setShowInstall] = useState(false);
  const [animateInstallButton, setAnimateInstallButton] = useState(false);
  const [showInstallDialog, setShowInstallDialog] = useState(false);
  const [beforeInstallPromptEvent, setBeforeInstallPromptEvent]
    = useState<BeforeInstallPromptEvent | null>(null);

  return (
    <AppInstallContext
      value={{
        animateInstallButton,
        beforeInstallPromptEvent,
        setAnimateInstallButton,
        setBeforeInstallPromptEvent,
        setShowInstall,
        setShowInstallDialog,
        showInstall,
        showInstallDialog,
      }}
    >
      {children}
      <AppInstall />
    </AppInstallContext>
  );
};

export default AppInstallProvider;
