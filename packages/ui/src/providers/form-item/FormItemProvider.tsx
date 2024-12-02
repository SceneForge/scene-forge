import { FormItemContext } from "@/contexts";
import { useCurrentId } from "@/hooks";
import { type PropsWithChildren } from "react";

export type FormItemProviderProps = PropsWithChildren<{
  id?: string;
}>;

const FormItemProvider = ({
  children,
  id,
}: FormItemProviderProps) => {
  const currentId = useCurrentId(id);

  return (
    <FormItemContext value={{ id: currentId }}>
      {children}
    </FormItemContext>
  );
};

export default FormItemProvider;
