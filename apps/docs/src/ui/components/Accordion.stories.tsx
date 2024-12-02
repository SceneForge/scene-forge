import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "@sceneforge/ui";

type AccordionMeta = Meta<typeof Accordion>;
type Story = StoryObj<typeof Accordion>;

export default {
  component: Accordion,
  title: "@sceneforge|ui/Accordion",
} satisfies AccordionMeta;

export const Default: Story = {};
