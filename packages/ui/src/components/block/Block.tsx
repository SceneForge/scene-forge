import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";
import { type ComponentPropsWithRef, createElement } from "react";

import { blockVariants, type BlockVariantsProps } from "./blockVariants";

export type BlockProps = {
  asChild?: boolean;
} & BlockVariantsProps & ComponentPropsWithRef<"div">;

const Block = ({
  asChild = false,
  children,
  className,
  margin,
  marginBlock,
  marginBlockEnd,
  marginBlockStart,
  marginInline,
  marginInlineEnd,
  marginInlineStart,
  padding,
  paddingBlock,
  paddingBlockEnd,
  paddingBlockStart,
  paddingInline,
  paddingInlineEnd,
  paddingInlineStart,
  ref,
  ...props
}: BlockProps) => {
  return createElement(asChild ? Slot : "div", {
    className: cn(blockVariants({
      margin,
      marginBlock,
      marginBlockEnd,
      marginBlockStart,
      marginInline,
      marginInlineEnd,
      marginInlineStart,
      padding,
      paddingBlock,
      paddingBlockEnd,
      paddingBlockStart,
      paddingInline,
      paddingInlineEnd,
      paddingInlineStart,
    }), className),
    ref,
    ...props,
  }, children);
};

export default Block;
