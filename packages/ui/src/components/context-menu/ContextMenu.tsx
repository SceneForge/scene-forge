import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-context-menu";

export type ContextMenuProps = ComponentProps<
  typeof Root
>;

const ContextMenu = ({ ...props }: ContextMenuProps) => {
  return (
    <Root {...props} />
  );
};

export default ContextMenu;
