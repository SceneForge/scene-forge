import type { ComponentProps } from "react";

export type SidebarMenuSubItemProps = ComponentProps<"li">;

const SidebarMenuSubItem = ({
  ref,
  ...props
}: SidebarMenuSubItemProps) => {
  return (
    <li ref={ref} {...props} />
  );
};

export default SidebarMenuSubItem;
