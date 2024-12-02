import type { SceneData } from "@sceneforge/data";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@sceneforge/ui";
import { BoxIcon } from "lucide-react";
import { useCallback } from "react";

import { useAppTab } from "../../hooks";
import { SceneTab } from "../../tabs";

export type SceneSidebarItemProps = {
  scene: SceneData;
};

const SceneSidebarItem = ({ scene }: SceneSidebarItemProps) => {
  const { addTab } = useAppTab();

  const handleSceneClick = useCallback(() => {
    addTab({
      content: SceneTab,
      id: scene.id.toLocaleString(),
      label: scene.name,
    });
  }, [addTab, scene.id, scene.name]);

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <SidebarMenuItem>
          <SidebarMenuButton onClick={handleSceneClick}>
            <BoxIcon />
            <span>{scene.name}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem inset>
          Close
          <ContextMenuShortcut>⌘W</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>
          Remove
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default SceneSidebarItem;
