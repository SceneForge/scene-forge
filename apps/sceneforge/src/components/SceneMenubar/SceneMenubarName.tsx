import {
  DialogTrigger,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@sceneforge/ui";

import { useSceneTab } from "../../hooks";

const SceneMenubarName = () => {
  const { scene } = useSceneTab();

  if (!scene) {
    return null;
  }

  return (
    <MenubarMenu>
      <MenubarTrigger>{scene.name}</MenubarTrigger>
      <MenubarContent>
        <DialogTrigger asChild>
          <MenubarItem>
            Rename
          </MenubarItem>
        </DialogTrigger>
        <MenubarSeparator />
        <MenubarItem>
          Remove
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default SceneMenubarName;
