import type { ComponentProps } from "react";

import { Provider } from "@radix-ui/react-tooltip";

export type TooltipProviderProps = ComponentProps<typeof Provider>;

const TooltipProvider = ({
  ...props
}: TooltipProviderProps) => {
  return (
    <Provider {...props} />
  );
};

export default TooltipProvider;
