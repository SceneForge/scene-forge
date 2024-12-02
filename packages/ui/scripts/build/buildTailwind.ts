import { $ } from "bun";
import path from "node:path";

import { buildStep } from "./buildStep";

export const buildTailwind = buildStep({
  build: async ({ outDir, rootDir, sourceDir }) => {
    const tailwindConfig = path.join(rootDir, "tailwind.config.ts");
    const globalsCss = path.join(sourceDir, "styles", "globals.css");
    const stylesCssOutput = path.join(outDir, "styles.css");

    return await $`tailwindcss -c ${tailwindConfig} -i ${globalsCss} -o ${stylesCssOutput}`.text();
  },
  name: "Tailwind CSS",
});
