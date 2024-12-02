import { createContext, type Dispatch, type SetStateAction } from "react";

export interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns an array of DOMString items containing the platforms on which the
   * event was dispatched. This is provided for user agents that want to present
   * a choice of versions to the user such as, for example, "web" or "play"
   * which would allow the user to chose between a web version or an Android
   * version.
   */
  readonly platforms: Array<string>;

  /**
   * Allows a developer to show the install prompt at a time of their own
   * choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;

  /**
   * Returns a Promise that resolves to a DOMString containing either "accepted"
   * or "dismissed".
   */
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

export type AppInstallContextType = {
  animateInstallButton: boolean;
  beforeInstallPromptEvent?: BeforeInstallPromptEvent | null;
  setAnimateInstallButton: Dispatch<SetStateAction<boolean>>;
  setBeforeInstallPromptEvent?: Dispatch<
    SetStateAction<BeforeInstallPromptEvent | null>
  >;
  setShowInstall: Dispatch<SetStateAction<boolean>>;
  setShowInstallDialog: Dispatch<SetStateAction<boolean>>;
  showInstall: boolean;
  showInstallDialog: boolean;
};

export const AppInstallContext = createContext<AppInstallContextType>({
  animateInstallButton: false,
  setAnimateInstallButton: () => void 0,
  setShowInstall: () => void 0,
  setShowInstallDialog: () => void 0,
  showInstall: false,
  showInstallDialog: false,
});
