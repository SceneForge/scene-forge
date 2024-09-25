import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-dialog";

export type SheetProps = ComponentProps<typeof Root>;

const Sheet = ({ ...props }: SheetProps) => {
  return (
    <Root {...props} />
  );
};

export default Sheet;
