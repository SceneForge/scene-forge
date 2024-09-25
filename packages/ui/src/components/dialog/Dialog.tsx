import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-dialog";

export type DialogProps = ComponentProps<typeof Root>;

const Dialog = ({ ...props }: DialogProps) => {
  return (
    <Root {...props} />
  );
};

export default Dialog;
