import type { ComponentProps } from "react";

import { Portal } from "@radix-ui/react-dialog";

export type SheetPortalProps = ComponentProps<typeof Portal>;

const SheetPortal = ({ ...props }: SheetPortalProps) => {
  return (
    <Portal {...props} />
  );
};

export default SheetPortal;
