import { Markdown as SimpleMarkdown } from "@simplecomponent/markdown";
import { components } from "./components";

export type MarkdownProps = {
  value?: string;
  href?: string;
};

export const Markdown = (props: MarkdownProps) => {
  return (
    <div className="m-inline-auto w-full select-text text-start c-inherit lg:w-3xl sm:w-lg xl:w-6xl">
      <SimpleMarkdown components={components} {...props} />
    </div>
  );
};
