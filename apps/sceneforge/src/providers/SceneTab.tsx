import { useLiveQuery } from "@sceneforge/data";
import { type PropsWithChildren, useMemo, useState } from "react";

import { SceneTabContext } from "../contexts";

export type SceneTabProviderProps = PropsWithChildren<{
  id: string;
  label?: string;
}>;

const SceneTabProvider = ({
  children,
  id: sceneId,
  label,
}: SceneTabProviderProps) => {
  const id = useMemo(() => Number.parseInt(sceneId), [sceneId]);
  const [sceneMode, setSceneMode] = useState<"edit" | "material" | "view">("view");
  const [renameDialogOpen, setRenameDialogOpen] = useState(false);

  const scene = useLiveQuery(db => db.scene.where("id").equals(id)
    .first(), [id]);

  const sceneBlob = useLiveQuery(db => db.sceneBlob.where("sceneId").equals(id)
    .first(), [id]);

  return (
    <SceneTabContext value={{
      id,
      renameDialogOpen,
      scene,
      sceneBlob,
      sceneMode,
      sceneTabLabel: label,
      setRenameDialogOpen,
      setSceneMode,
    }}
    >
      {children}
    </SceneTabContext>
  );
};

export default SceneTabProvider;
