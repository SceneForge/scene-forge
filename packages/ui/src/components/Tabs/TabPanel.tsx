import * as stylex from "@stylexjs/stylex";
import { type ComponentType } from "react";

import { View } from "../View";

export type TabCloseCallback = () => (Promise<void> | void);

export type TabPanelCoreProps = {
  beforeClose?: TabCloseCallback;
  hidden: boolean;
  registerBeforeClose: (callback?: TabCloseCallback) => void;
  tabId: string;
};

export type TabComponentType = ComponentType<TabPanelCoreProps>;

export type TabPanelProps<Props = Record<string, unknown>> = {
  component?: TabComponentType;
  props?: Props;
} & TabPanelCoreProps;

export type TabComponentProps<
  Props = Record<string, unknown>,
> = Props & TabPanelCoreProps;

const styles = stylex.create({
  container: {
    height: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    minWidth: "100%",
    position: "relative",
    width: 0,
  },
});

const TabPanel = <Props = Record<string, unknown>>({
  component: TabComponent,
  hidden,
  props,
  registerBeforeClose,
  tabId,
}: TabPanelProps<Props>) => {
  return (
    <View
      aria-labelledby={tabId}
      hidden={hidden}
      id={`${tabId}-panel`}
      role="tabpanel"
      style={styles.container}
    >
      <View scrollable>
        {
          TabComponent && (
            <TabComponent
              {...props}
              hidden={hidden ?? true}
              registerBeforeClose={registerBeforeClose}
              tabId={tabId}
            />
          )
        }
      </View>
    </View>
  );
};

export default TabPanel;
