import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-aspect-ratio";

export type AspectRatioProps = ComponentProps<typeof Root>;

const AspectRatio = ({ ...props }: AspectRatioProps) => {
  return (
    <Root {...props} />
  );
};

export default AspectRatio;
