import { cva, type VariantProps } from "class-variance-authority";

export const blockVariants = cva(
  "block",
  {
    defaultVariants: {
      margin: "none",
      marginBlock: "none",
      marginBlockEnd: "none",
      marginBlockStart: "none",
      marginInline: "none",
      marginInlineEnd: "none",
      marginInlineStart: "none",
      padding: "none",
      paddingBlock: "none",
      paddingBlockEnd: "none",
      paddingBlockStart: "none",
      paddingInline: "none",
      paddingInlineEnd: "none",
      paddingInlineStart: "none",
    },
    variants: {
      margin: {
        lg: "m-5",
        md: "m-3",
        none: "",
        sm: "m-2.5",
      },
      marginBlock: {
        lg: "mb-5 mt-5",
        md: "mb-3 mt-3",
        none: "",
        sm: "mb-2.5 mt-2.5",
      },
      marginBlockEnd: {
        lg: "mb-5",
        md: "mb-3",
        none: "",
        sm: "mb-2.5",
      },
      marginBlockStart: {
        lg: "mt-5",
        md: "mt-3",
        none: "",
        sm: "mt-2.5",
      },
      marginInline: {
        lg: "ml-5 mr-5",
        md: "ml-3 mr-3",
        none: "",
        sm: "ml-2.5 mr-2.5",
      },
      marginInlineEnd: {
        lg: "mr-5",
        md: "mr-3",
        none: "",
        sm: "mr-2.5",
      },
      marginInlineStart: {
        lg: "ml-5",
        md: "ml-3",
        none: "",
        sm: "ml-2.5",
      },
      padding: {
        lg: "p-5",
        md: "p-3",
        none: "",
        sm: "p-2.5",
      },
      paddingBlock: {
        lg: "pb-5 pt-5",
        md: "pb-3 pt-3",
        none: "",
        sm: "pb-2.5 pt-2.5",
      },
      paddingBlockEnd: {
        lg: "pb-5",
        md: "pb-3",
        none: "",
        sm: "pb-2.5",
      },
      paddingBlockStart: {
        lg: "pt-5",
        md: "pt-3",
        none: "",
        sm: "pt-2.5",
      },
      paddingInline: {
        lg: "pl-5 pr-5",
        md: "pl-3 pr-3",
        none: "",
        sm: "pl-2.5 pr-2.5",
      },
      paddingInlineEnd: {
        lg: "pr-5",
        md: "pr-3",
        none: "",
        sm: "pr-2.5",
      },
      paddingInlineStart: {
        lg: "pl-5",
        md: "pl-3",
        none: "",
        sm: "pl-2.5",
      },
    },
  }
);

export type BlockVariantsProps = VariantProps<typeof blockVariants>;
