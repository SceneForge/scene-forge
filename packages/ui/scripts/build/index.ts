import { buildPackage } from "./buildPackage";
import { buildTailwind } from "./buildTailwind";
import { buildTypescriptDeclarations } from "./buildTypescriptDeclarations";
import { clearOutputDirection } from "./clearOutputDirection";
import { run } from "./run";

await run(
  clearOutputDirection,
  buildTypescriptDeclarations,
  buildTailwind,
  buildPackage
);
