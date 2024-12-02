import type { ComponentPropsWithRef } from "react";

import { Heading } from "@/components";
import { cn } from "@/lib";

export type SectionProps = { level?: 1 | 2 | 3 | 4 | 5 | 6; title?: string } & ComponentPropsWithRef<"section">;

const Section = ({
  children,
  className,
  level,
  ref,
  title,
  ...props
}: SectionProps) => {
  return (
    <section
      {...props}
      className={cn(className)}
      ref={ref}
    >
      {title && (
        <Heading level={level}>
          {title}
        </Heading>
      )}
      {children}
    </section>
  );
};

export default Section;
