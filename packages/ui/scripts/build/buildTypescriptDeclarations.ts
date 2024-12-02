import { $ } from "bun";
import path from "node:path";

import { buildStep } from "./buildStep";

export const buildTypescriptDeclarations = buildStep({
  build: async ({ environment, rootDir }) => {
    const tsConfigBuild = path.join(rootDir, "tsconfig.build.json");

    return await $`NODE_ENV=${environment} tsc -p ${tsConfigBuild}`.text();
  },
  name: "Typescript Declarations",
});
