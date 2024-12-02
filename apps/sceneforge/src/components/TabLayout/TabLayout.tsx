import type { PropsWithChildren } from "react";

import { Block, Heading } from "@sceneforge/ui";

export type TabLayoutProps = PropsWithChildren<{
  title?: string;
}>;

const TabLayout = ({
  children,
  title,
}: TabLayoutProps) => {
  return (
    <Block paddingBlock="md" paddingInline="lg">
      {title && (<Heading level={1}>{title}</Heading>)}
      <Block paddingBlock="md">
        {children}
      </Block>
    </Block>
  );
};

export default TabLayout;
