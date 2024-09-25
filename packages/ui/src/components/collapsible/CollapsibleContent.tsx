import type { ComponentProps } from "react";

import { CollapsibleContent as RadixUiCollapsibleContent } from "@radix-ui/react-collapsible";

export type CollapsibleContentProps = ComponentProps<
  typeof RadixUiCollapsibleContent
>;

const CollapsibleContent = ({ ...props }: CollapsibleContentProps) => {
  return (
    <RadixUiCollapsibleContent {...props} />
  );
};

export default CollapsibleContent;
