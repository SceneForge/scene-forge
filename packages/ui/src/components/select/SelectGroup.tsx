import type { ComponentProps } from "react";

import { Group } from "@radix-ui/react-select";

export type SelectGroupProps = ComponentProps<typeof Group>;

const SelectGroup = ({ ...props }: SelectGroupProps) => {
  return (
    <Group {...props} />
  );
};

export default SelectGroup;
