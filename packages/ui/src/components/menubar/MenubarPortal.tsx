import type { ComponentProps } from "react";

import { Portal } from "@radix-ui/react-menubar";

export type MenubarPortalProps = ComponentProps<typeof Portal>;

const MenubarPortal = ({ ...props }: MenubarPortalProps) => {
  return (
    <Portal {...props} />
  );
};

export default MenubarPortal;
