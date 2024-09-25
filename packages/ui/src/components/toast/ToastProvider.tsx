import type { ComponentProps } from "react";

import { Provider } from "@radix-ui/react-toast";

export type ToastProviderProps = ComponentProps<typeof Provider>;

const ToastProvider = ({ ...props }: ToastProviderProps) => {
  return (
    <Provider {...props} />
  );
};

export default ToastProvider;
