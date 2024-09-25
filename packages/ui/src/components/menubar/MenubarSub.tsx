import type { ComponentProps } from "react";

import { Sub } from "@radix-ui/react-menubar";

export type MenubarSubProps = ComponentProps<
  typeof Sub
>;

const MenubarSub = ({ ...props }: MenubarSubProps) => {
  return (
    <Sub {...props} />
  );
};

export default MenubarSub;
