import type { ComponentPropsWithRef } from "react";

import { FormProvider as RHFormProvider } from "react-hook-form";

export type FormProviderProps = ComponentPropsWithRef<typeof RHFormProvider>;

const FormProvider = ({ children, ...props }: FormProviderProps) => {
  return (
    <RHFormProvider {...props}>
      {children}
    </RHFormProvider>
  );
};

export default FormProvider;
