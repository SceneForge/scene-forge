import type { PropsWithChildren } from "react";

import { ResizablePanel } from "@sceneforge/ui";

export type ScenePanelDrawerProps = PropsWithChildren;

const ScenePanelDrawer = ({ children }: ScenePanelDrawerProps) => {
  return (
    <ResizablePanel>
      {children}
    </ResizablePanel>
  );
};

export default ScenePanelDrawer;
