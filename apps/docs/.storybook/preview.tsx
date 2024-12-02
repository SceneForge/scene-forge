import type { Preview } from "@storybook/react";

import "@sceneforge/ui/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    docs: {
      controls: { exclude: ["style", "ref", "id"] },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default preview;
