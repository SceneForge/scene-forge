import { View } from "@sceneforge/ui";
import { Markdown as SimpleMarkdown } from "@simplecomponent/markdown";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { useAppContext } from "../App";
import { components } from "./components";

export type MarkdownProps = {
  href?: string;
  value?: string;
};

export const Markdown = ({ href, value, ...props }: MarkdownProps) => {
  const { i18n: { resolvedLanguage } } = useTranslation();
  const { basePath } = useAppContext();
  const [
    currentDocument,
    setCurrentDocument,
  ] = useState<string | undefined>(value);
  const [contentUrl, setContentUrl] = useState<string>("initial-content");

  const i18nHref = useMemo(() => {
    return href && href.startsWith("/docs")
      ? href.replace("/docs", `${basePath}locales/docs/${resolvedLanguage}`)
      : href;
  }, [href, resolvedLanguage, basePath]);

  useEffect(() => {
    if (i18nHref) {
      fetch(i18nHref)
        .then((response) => {
          response
            .text()
            .then((text) => {
              setContentUrl(response.url);
              setCurrentDocument(text);
            })
            .catch((error) => {
              throw new Error("Failed to get the fetched document content", {
                cause: error,
              });
            });
        })
        .catch((error) => {
          throw new Error("Failed to fetch document", { cause: error });
        });
    }
  }, [i18nHref, setCurrentDocument]);

  return (
    <View>
      <SimpleMarkdown
        components={components}
        key={contentUrl}
        {...props}
        value={currentDocument}
      />
    </View>
  );
};
