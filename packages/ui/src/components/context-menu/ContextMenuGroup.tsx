import type { ComponentProps } from "react";

import { Group } from "@radix-ui/react-context-menu";

export type ContextMenuGroupProps = ComponentProps<
  typeof Group
>;

const ContextMenuGroup = ({ ...props }: ContextMenuGroupProps) => {
  return (
    <Group {...props} />
  );
};

export default ContextMenuGroup;
