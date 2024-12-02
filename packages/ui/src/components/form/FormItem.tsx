import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib";
import { FormItemProvider } from "@/providers";

export type FormItemProps = ComponentPropsWithRef<"div">;

const FormItem = ({ className, id, ref, ...props }: FormItemProps) => {
  return (
    <FormItemProvider id={id}>
      <div className={cn("space-y-2", className)} ref={ref} {...props} />
    </FormItemProvider>
  );
};

export default FormItem;
