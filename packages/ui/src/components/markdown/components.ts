import type { MarkdownProps } from "@simplecomponent/markdown";

import {
  Blockquote,
  FigureButtonDialog,
  Grid,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Paragraph,
  Section,
} from "@/components";
import { wrapper } from "@/lib/markdown";

export const components: MarkdownProps["components"] = {
  a: wrapper(Link, { rel: "nofollow", target: "_blank" }),
  blockquote: wrapper(Blockquote),
  FigureButtonDialog: wrapper(FigureButtonDialog),
  Grid: wrapper(Grid),
  h1: wrapper(Heading, { level: 1 }),
  h2: wrapper(Heading, { level: 2 }),
  h3: wrapper(Heading, { level: 3 }),
  h4: wrapper(Heading, { level: 4 }),
  h5: wrapper(Heading, { level: 5 }),
  h6: wrapper(Heading, { level: 6 }),
  img: wrapper(Image),
  li: wrapper(ListItem),
  p: wrapper(Paragraph),
  Section: wrapper(Section),
  ul: wrapper(List),
};
