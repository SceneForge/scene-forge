import type { ComponentProps } from "react";

import { Value } from "@radix-ui/react-select";

export type SelectValueProps = ComponentProps<
  typeof Value
>;

const SelectValue = ({ ...props }: SelectValueProps) => {
  return (
    <Value {...props} />
  );
};

export default SelectValue;
