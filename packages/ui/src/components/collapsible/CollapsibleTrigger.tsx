import type { ComponentProps } from "react";

import { CollapsibleTrigger as RadixUiCollapsibleTrigger } from "@radix-ui/react-collapsible";

export type CollapsibleTriggerProps = ComponentProps<
  typeof RadixUiCollapsibleTrigger
>;

const CollapsibleTrigger = ({ ...props }: CollapsibleTriggerProps) => {
  return (
    <RadixUiCollapsibleTrigger {...props} />
  );
};

export default CollapsibleTrigger;
