import { rmdir } from "node:fs/promises";

import { buildStep } from "./buildStep";

export const clearOutputDirection = buildStep({
  build: async ({ outDir }) => {
    await rmdir(outDir, {
      recursive: true,
    });
  },
  name: "Clear Output Directory",
});
