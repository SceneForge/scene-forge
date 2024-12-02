import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-tooltip";

export type TooltipProps = ComponentProps<typeof Root>;

const Tooltip = ({
  ...props
}: TooltipProps) => {
  return (
    <Root {...props} />
  );
};

export default Tooltip;
