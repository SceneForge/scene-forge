import type { ComponentProps } from "react";

import { cn } from "@/lib";
import { Trigger } from "@radix-ui/react-menubar";

export type MenubarTriggerProps = ComponentProps<
  typeof Trigger
>;

const MenubarTrigger = ({
  className,
  ref,
  ...props
}: MenubarTriggerProps) => {
  return (
    <Trigger
      {...props}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )}
      ref={ref}
    />
  );
};

export default MenubarTrigger;
