import type { ComponentProps } from "react";

import { RadioGroup } from "@radix-ui/react-menubar";

export type MenubarRadioGroupProps = ComponentProps<
  typeof RadioGroup
>;

const MenubarRadioGroup = ({ ...props }: MenubarRadioGroupProps) => {
  return (
    <RadioGroup {...props} />
  );
};

export default MenubarRadioGroup;
