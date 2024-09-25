import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-tabs";

export type TabsProps = ComponentProps<typeof Root>;

const Tabs = ({ ...props }: TabsProps) => {
  return (
    <Root {...props} />
  );
};

export default Tabs;
