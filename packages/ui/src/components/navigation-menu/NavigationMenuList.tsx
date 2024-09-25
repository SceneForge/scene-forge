import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { List } from "@radix-ui/react-navigation-menu";

export type NavigationMenuListProps = ComponentProps<
  typeof List
>;

const NavigationMenuList = ({
  className,
  ref,
  ...props
}: NavigationMenuListProps) => {
  return (
    <List
      {...props}
      className={cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      ref={ref}
    />
  );
};

export default NavigationMenuList;
