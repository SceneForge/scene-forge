import { blockquoteTransform } from "@/lib/markdown";
import { Markdown as SCMarkdown } from "@simplecomponent/markdown";

import { components } from "./components";

export type MarkdownProps = {
  value: string;
};

const Markdown = ({ value }: MarkdownProps) => {
  return (
    <SCMarkdown
      components={components}
      rehypePlugins={[
        blockquoteTransform({
          gallery: true,
        }),
      ]}
      value={value}
    />
  );
};

export default Markdown;
