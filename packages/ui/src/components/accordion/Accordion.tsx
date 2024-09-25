import type { ComponentProps } from "react";

import { Root } from "@radix-ui/react-accordion";

export type AccordionProps = ComponentProps<typeof Root>;

const Accordion = ({ children, ref, ...props }: AccordionProps) => {
  return (
    <Root ref={ref} {...props}>
      {children}
    </Root>
  );
};

export default Accordion;
