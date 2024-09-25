import type { ComponentProps } from "react";

export type BreadcrumbProps = {
  separator?: React.ReactNode;
} & ComponentProps<"nav">;

const Breadcrumb = ({ ref, ...props }: BreadcrumbProps) => {
  return (
    <nav
      {...props}
      aria-label="breadcrumb"
      ref={ref}
    />
  );
};

export default Breadcrumb;
