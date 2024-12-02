import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@sceneforge/ui";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { useAppInstall } from "../../hooks";

const AppInstall = () => {
  const { t } = useTranslation("AppInstall");
  const [open, setOpen] = useState(true);

  const {
    closeInstallDialog,
    installPrompt,
    showInstallDialog,
  } = useAppInstall();

  const handleInstallPrompt = useCallback(() => {
    installPrompt()
      ?.then(() => {
        closeInstallDialog();
      })
      .catch(() => {
        closeInstallDialog();
      });
  }, [installPrompt, closeInstallDialog]);

  if (!showInstallDialog) return null;

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleInstallPrompt} type="button">{t("install")}</Button>
          <Button onClick={closeInstallDialog} type="button">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppInstall;
