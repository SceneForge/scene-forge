import type { ComponentProps } from "react";

import { Portal } from "@radix-ui/react-alert-dialog";

export type AlertDialogPortalProps = ComponentProps<typeof Portal>;

const AlertDialogPortal = ({ ...props }) => {
  return (
    <Portal {...props} />
  );
};

export default AlertDialogPortal;
