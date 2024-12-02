import {
  ResizablePanelGroup,
} from "@sceneforge/ui";
import { type PropsWithChildren } from "react";

export type ScenePanelProps = PropsWithChildren;

const ScenePanel = ({ children }: ScenePanelProps) => {
  return (
    <ResizablePanelGroup direction="vertical">
      {children}
    </ResizablePanelGroup>
  );
};

export default ScenePanel;
