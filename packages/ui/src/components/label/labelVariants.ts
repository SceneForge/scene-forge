import { cva, type VariantProps } from "class-variance-authority";

export const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export type LabelVariantsProps = VariantProps<typeof labelVariants>;
