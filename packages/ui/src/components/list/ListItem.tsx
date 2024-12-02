import type { ComponentProps } from "react";

export type ListItemProps = ComponentProps<"li">;

const ListItem = ({ ref, ...props }: ListItemProps) => {
  return (
    <li
      ref={ref}
      {...props}
    />
  );
};

export default ListItem;
