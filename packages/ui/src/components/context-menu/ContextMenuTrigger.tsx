import type { ComponentProps } from "react";

import { Trigger } from "@radix-ui/react-context-menu";

export type ContextMenuTriggerProps = ComponentProps<
  typeof Trigger
>;

const ContextMenuTrigger = ({ ...props }: ContextMenuTriggerProps) => {
  return (
    <Trigger {...props} />
  );
};

export default ContextMenuTrigger;
