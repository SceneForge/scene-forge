import type { TabProps } from "../contexts";

import {
  SceneMenubar,
  SceneMenubarMode,
  SceneMenubarName,
  ScenePanel,
  ScenePanelCanvas,
  ScenePanelDrawer,
  ScenePanelSeparator,
} from "../components";
import { EngineProvider, SceneTabProvider } from "../providers";

const SceneTab = ({ active, id, label }: TabProps) => {
  return (
    <EngineProvider active={active ?? false}>
      <SceneTabProvider id={id} label={label}>
        <ScenePanel>
          <ScenePanelCanvas />
          <ScenePanelSeparator />
          <ScenePanelDrawer>
            <SceneMenubar>
              <SceneMenubarName />
              <SceneMenubarMode />
            </SceneMenubar>
          </ScenePanelDrawer>
        </ScenePanel>
      </SceneTabProvider>
    </EngineProvider>
  );
};

export default SceneTab;
