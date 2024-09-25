import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-collapsible";

export type CollapsibleProps = ComponentProps<typeof Root>;

const Collapsible = ({ ...props }: CollapsibleProps) => {
  return (
    <Root {...props} />
  );
};

export default Collapsible;
