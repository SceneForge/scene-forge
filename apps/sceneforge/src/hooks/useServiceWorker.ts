import { useCallback, useContext } from "react";

import type { MessageDataPromiseObjectType } from "../providers";

import { ServiceWorkerContext } from "../contexts";

export const useServiceWorker = () => {
  const {
    serviceWorkerRegistration,
    setMessages,
  } = useContext(ServiceWorkerContext);

  const postMessage = useCallback((message: Omit<MessageDataPromiseObjectType, "messageId">) => {
    return new Promise((resolve, reject) => {
      if (!serviceWorkerRegistration) return;
      if (!serviceWorkerRegistration.current) return;
      if (!serviceWorkerRegistration.current.active) return;

      const messageId = Math.random().toString(36)
        .slice(7);

      serviceWorkerRegistration.current.active.postMessage({
        messageId,
        ...message,
      });

      setMessages(previousMessages => [
        ...previousMessages,
        {
          messageId,
          ...message,
          reject,
          resolve,
        },
      ]);
    });
  }, [serviceWorkerRegistration, setMessages]);

  return {
    postMessage,
  };
};
