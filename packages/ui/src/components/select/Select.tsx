import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-select";

export type SelectProps = ComponentProps<typeof Root>;

const Select = ({ ...props }: SelectProps) => {
  return (
    <Root {...props} />
  );
};

export default Select;
