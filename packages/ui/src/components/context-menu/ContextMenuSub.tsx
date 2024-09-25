import type { ComponentProps } from "react";

import { Sub } from "@radix-ui/react-context-menu";

export type ContextMenuSubProps = ComponentProps<
  typeof Sub
>;

const ContextMenuSub = ({ ...props }: ContextMenuSubProps) => {
  return (
    <Sub {...props} />
  );
};

export default ContextMenuSub;
