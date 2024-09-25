import type { ComponentProps } from "react";

import { Panel } from "react-resizable-panels";

export type ResizablePanelProps = ComponentProps<typeof Panel>;

const ResizablePanel = ({ ...props }: ResizablePanelProps) => {
  return (
    <Panel {...props} />
  );
};

export default ResizablePanel;
