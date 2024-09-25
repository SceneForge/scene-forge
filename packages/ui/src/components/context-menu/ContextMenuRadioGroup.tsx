import type { ComponentProps } from "react";

import { RadioGroup } from "@radix-ui/react-context-menu";

export type ContextMenuRadioGroupProps = ComponentProps<
  typeof RadioGroup
>;

const ContextMenuRadioGroup = ({
  ...props
}: ContextMenuRadioGroupProps) => {
  return (
    <RadioGroup {...props} />
  );
};

export default ContextMenuRadioGroup;
