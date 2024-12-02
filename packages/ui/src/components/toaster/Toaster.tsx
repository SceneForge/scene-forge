import type { ComponentProps } from "react";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from "@/components";
import { useToast } from "@/hooks";
import { ToastProvider } from "@/providers";

export type ToasterProps = ComponentProps<typeof ToastProvider>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { toasts } = useToast();

  return (
    <ToastProvider {...props}>
      {toasts.map(({ action, description, id, title, ...rest }) => (
        <Toast key={id} {...rest}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && (
              <ToastDescription>{description}</ToastDescription>
            )}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
};

export default Toaster;
