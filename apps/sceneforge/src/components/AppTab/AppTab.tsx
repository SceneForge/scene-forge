import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuShortcut, ContextMenuTrigger, TabsTrigger, type TabsTriggerProps } from "@sceneforge/ui";

import { useAppTab } from "../../hooks";

export type AppTabProps = TabsTriggerProps;

const AppTab = ({ children, value }: AppTabProps) => {
  const { closeTab } = useAppTab();

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <TabsTrigger value={value}>
          {children}
        </TabsTrigger>
      </ContextMenuTrigger>
      <ContextMenuContent style={{ minWidth: "15rem" }}>
        <ContextMenuItem inset onClick={() => closeTab(value)}>
          Close
          <ContextMenuShortcut>⌘W</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Close Others
          <ContextMenuShortcut>⌥⌘T</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Close to the Right
        </ContextMenuItem>
        <ContextMenuItem inset>
          Close All
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default AppTab;
