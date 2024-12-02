import {
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@sceneforge/ui";
import { useMemo } from "react";

import { useSceneTab } from "../../hooks";
import { SceneModeIcon } from "../SceneModeIcon";

const SceneMenubarMode = () => {
  const {
    sceneMode,
    setEditSceneMode,
    setMaterialSceneMode,
    setViewSceneMode,
  } = useSceneTab();

  const sceneModeDescription = useMemo(() => {
    if (sceneMode === "edit") {
      return "Edit mode";
    }
    if (sceneMode === "material") {
      return "Material mode";
    }
    return "View mode";
  }, [sceneMode]);

  return (
    <MenubarMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <MenubarTrigger>
              <SceneModeIcon size="18" />
              Mode
            </MenubarTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>{sceneModeDescription}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <MenubarContent>
        <MenubarRadioGroup value={sceneMode}>
          <MenubarRadioItem onClick={setViewSceneMode} value="view">View mode</MenubarRadioItem>
          <MenubarRadioItem onClick={setEditSceneMode} value="edit">Edit mode</MenubarRadioItem>
          <MenubarRadioItem onClick={setMaterialSceneMode} value="material">Material mode</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default SceneMenubarMode;
