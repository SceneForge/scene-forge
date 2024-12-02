import type { PropsWithChildren } from "react";

import {
  Dialog,
  Menubar,
} from "@sceneforge/ui";

import { useSceneTab } from "../../hooks";
import { RenameSceneForm } from "../RenameSceneForm";

export type SceneMenubarProps = PropsWithChildren;

const SceneMenubar = ({ children }: PropsWithChildren) => {
  const {
    renameDialogOpen,
    scene,
    setRenameDialogOpen,
  } = useSceneTab();

  if (!scene) {
    return null;
  }

  return (
    <Dialog onOpenChange={setRenameDialogOpen} open={renameDialogOpen}>
      <Menubar>
        {children}
      </Menubar>
      <RenameSceneForm />
    </Dialog>
  );
};

export default SceneMenubar;
