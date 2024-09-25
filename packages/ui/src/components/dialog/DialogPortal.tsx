import type { ComponentProps } from "react";

import { Portal } from "@radix-ui/react-dialog";

export type DialogPortalProps = ComponentProps<typeof Portal>;

const DialogPortal = ({ ...props }: DialogPortalProps) => {
  return (
    <Portal {...props} />
  );
};

export default DialogPortal;
