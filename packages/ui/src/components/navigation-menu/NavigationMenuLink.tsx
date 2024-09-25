import type { ComponentProps } from "react";

import { Link } from "@radix-ui/react-navigation-menu";

export type NavigationMenuLinkProps = ComponentProps<
  typeof Link
>;

const NavigationMenuLink = ({ ...props }: NavigationMenuLinkProps) => {
  return (
    <Link {...props} />
  );
};

export default NavigationMenuLink;
