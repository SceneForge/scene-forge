import { cn } from "@/lib";
import { Root } from "@radix-ui/react-navigation-menu";
import { lazy } from "react";

const NavigationMenuViewport = lazy(() => import("./NavigationMenuViewport"));

import type { ComponentProps } from "react";

export type NavigationMenuProps = ComponentProps<
  typeof Root
>;

const NavigationMenu = ({
  children,
  className,
  ref,
  ...props
}: NavigationMenuProps) => {
  return (
    <Root
      {...props}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      ref={ref}
    >
      {children}
      <NavigationMenuViewport />
    </Root>
  );
};

export default NavigationMenu;
