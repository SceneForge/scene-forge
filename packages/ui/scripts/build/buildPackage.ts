import path from "node:path";

import { buildStep } from "./buildStep";

const size = (value: number) => {
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(2)} KB`;
  if (value < 1024 * 1024 * 1024) return `${(value / 1024 / 1024).toFixed(2)} MB`;
  if (value < 1024 * 1024 * 1024 * 1024) return `${(value / 1024 / 1024 / 1024).toFixed(2)} GB`;
  return `${value} B`;
};

type RowType = {
  [key: string]: boolean | number | string | undefined;
};

const toString = (value?: boolean | number | string): string => {
  if (value === undefined) return "";
  if (value === true) return "true";
  if (value === false) return "false";
  if (typeof value === "number") return value.toString();
  return value;
};

const table = (rows: RowType[], columns: string[]) => {
  const columnWidths = columns.map(
    column => Math.max(column.length, ...rows.map(
      row => toString(row[column]).length
    ))
  );
  const separator = columnWidths.map((width, index) => "-".repeat(width + (index > 0 ? 2 : 1))).join("+");
  const header = columns.map((column, index) => column.padEnd(columnWidths[index])).join(" | ");
  const body = rows.map(row => columns.map(column => toString(row[column]).padEnd(columnWidths[columns.indexOf(column)])).join(" | "));
  return [header, separator, ...body].join("\n");
};

export const buildPackage = buildStep({
  build: async ({ outDir, rootDir, sourceDir }) => {
    const indexEntrypoint = path.join(sourceDir, "index.ts");
    const result = await Bun.build({
      entrypoints: [indexEntrypoint],
      external: ["react", "react-dom", "lucide-react"],
      minify: false,
      outdir: outDir,
      sourcemap: "inline",
      splitting: true,
    });
    if (result.success) {
      const outputTable = [];
      for (const output of result.outputs) {
        if (output.path && output.kind === "chunk") {
          outputTable.push({
            Bytes: output.size,
            File: path.relative(rootDir, output.path),
            Loader: output.loader,
            Size: size(output.size),
          });
        }
      }
      outputTable.sort(
        ({ Bytes: aBytes }, { Bytes: bBytes }) => aBytes - bBytes
      );
      return table(outputTable, ["File", "Loader", "Size"]);
    }
    else {
      const errors: string[] = [];
      if ("logs" in result && Array.isArray(result.logs) && result.logs.length > 0) {
        for (const log of result.logs) {
          if ("level" in log && log.level === "error" && "message" in log) {
            errors.push(log.message);
          }
        }
      }
      throw new Error(`Build failed${errors.length > 0 ? `:\n${errors.join("\n --> ")}` : ""}`);
    }
  },
  name: "Package",
});
