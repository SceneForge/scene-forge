import { exit } from "node:process";

export type BuildStepFunctionOptions = {
  readonly environment: "development" | "production";
  readonly outDir: string;
  readonly rootDir: string;
  readonly sourceDir: string;
};

export type BuildStepFunction = (
  options: BuildStepFunctionOptions
) => Promise<string> | Promise<void>;

export type BuildStepOptions = {
  build: BuildStepFunction;
  name: string;
};

export const buildStep = ({
  build,
  name,
}: BuildStepOptions) => {
  return async (options: BuildStepFunctionOptions) => {
    try {
      console.log(`Running build step: ${name}`);
      const result = await build(options);
      if (typeof result === "string") {
        console.log(result);
      }
      console.log(`Build step succeeded: ${name}`);
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      }
      else {
        console.error(error);
      }
      console.error(`Failed to run build step: ${name}`);
      exit(1);
    }
  };
};
