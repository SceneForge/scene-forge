import type { ComponentProps } from "react";

import { Portal } from "@radix-ui/react-context-menu";

export type ContextMenuPortalProps = ComponentProps<
  typeof Portal
>;

const ContextMenuPortal = ({ ...props }: ContextMenuPortalProps) => {
  return (
    <Portal {...props} />
  );
};

export default ContextMenuPortal;
