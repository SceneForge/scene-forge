import type { ComponentProps } from "react";

import { RadioGroup } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuRadioGroupProps = ComponentProps<typeof RadioGroup>;

const DropdownMenuRadioGroup = ({ ...props }: DropdownMenuRadioGroupProps) => {
  return (<RadioGroup {...props} />);
};

export default DropdownMenuRadioGroup;
