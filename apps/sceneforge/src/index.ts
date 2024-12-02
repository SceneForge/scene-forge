import "@sceneforge/ui/styles.css";
import { QueryClient } from "@tanstack/react-query";
import { createElement } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components";
import { i18nInit } from "./lib/i18n";

const rootElement = document.body as HTMLBodyElement;
const root = createRoot(rootElement);

try {
  const { languages } = await i18nInit();
  const queryClient = new QueryClient();

  root.render(createElement(App, {
    languages,
    queryClient,
  }));
}
catch (error) {
  throw new Error("Failed to render app", { cause: error });
}
