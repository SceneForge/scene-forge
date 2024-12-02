import path from "node:path";
import { env } from "node:process";

import type { BuildStepFunction, BuildStepFunctionOptions } from "./buildStep";

export const run = async (...steps: BuildStepFunction[]) => {
  const rootDirectory = path.resolve(import.meta.dirname, "..", "..");
  const outputDirectory = path.join(rootDirectory, "dist");
  const sourceDirectory = path.join(rootDirectory, "src");

  const environment = env["NODE_ENV"] === "production" ? "production" : "development";

  const buildStepFunctionOptions: BuildStepFunctionOptions = {
    environment,
    outDir: outputDirectory,
    rootDir: rootDirectory,
    sourceDir: sourceDirectory,
  };

  for await (const step of steps) {
    await step(buildStepFunctionOptions);
  }
};
