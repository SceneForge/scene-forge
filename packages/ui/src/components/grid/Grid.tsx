import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib";

import { gridVariants, type GridVariantsProps } from "./gridVariants";

export type GridProps = ComponentPropsWithRef<"div"> & GridVariantsProps;

const Grid = ({
  children,
  className,
  columns,
  columns2xl,
  columnsLg,
  columnsMd,
  columnsSm,
  columnsXl,
  gap,
  gap2xl,
  gapColumn,
  gapColumn2xl,
  gapColumnLg,
  gapColumnMd,
  gapColumnSm,
  gapColumnXl,
  gapLg,
  gapMd,
  gapRow,
  gapRow2xl,
  gapRowLg,
  gapRowMd,
  gapRowSm,
  gapRowXl,
  gapSm,
  gapXl,
  ref,
  ...props
}: GridProps) => {
  return (
    <div
      {...props}
      className={cn(gridVariants({
        columns,
        columns2xl,
        columnsLg,
        columnsMd,
        columnsSm,
        columnsXl,
        gap,
        gap2xl,
        gapColumn,
        gapColumn2xl,
        gapColumnLg,
        gapColumnMd,
        gapColumnSm,
        gapColumnXl,
        gapLg,
        gapMd,
        gapRow,
        gapRow2xl,
        gapRowLg,
        gapRowMd,
        gapRowSm,
        gapRowXl,
        gapSm,
        gapXl,
      }), className)}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Grid;
