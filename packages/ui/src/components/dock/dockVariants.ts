import { cva, type VariantProps } from "class-variance-authority";

export const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md"
);

export type DockVariantProps = VariantProps<typeof dockVariants>;
