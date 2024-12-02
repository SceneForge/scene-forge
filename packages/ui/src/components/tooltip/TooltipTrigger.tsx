import type { ComponentProps } from "react";

import { Trigger } from "@radix-ui/react-tooltip";

export type TooltipTriggerProps = ComponentProps<typeof Trigger>;

const TooltipTrigger = ({
  ...props
}: TooltipTriggerProps) => {
  return <Trigger {...props} />;
};

export default TooltipTrigger;
