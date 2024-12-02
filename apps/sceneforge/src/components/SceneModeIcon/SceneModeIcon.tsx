import { Block } from "@sceneforge/ui";
import { BrickWallIcon, EditIcon, type LucideProps, ViewIcon } from "lucide-react";

import { useSceneTab } from "../../hooks";

export type SceneModeIconProps = LucideProps;

const SceneModeIcon = (props: SceneModeIconProps) => {
  const { sceneMode } = useSceneTab();

  return (
    <Block marginInlineEnd="sm">
      {sceneMode === "view" && (<ViewIcon {...props} />)}
      {sceneMode === "edit" && (<EditIcon {...props} />)}
      {sceneMode === "material" && (<BrickWallIcon {...props} />)}
    </Block>
  );
};

export default SceneModeIcon;
