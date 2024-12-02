import type { ComponentProps } from "react";

import { FormProvider } from "@/providers";

export type FormProps = ComponentProps<typeof FormProvider>;

const Form = ({ children, ...props }: FormProps) => {
  return (
    <FormProvider {...props}>
      {children}
    </FormProvider>
  );
};

export default Form;
