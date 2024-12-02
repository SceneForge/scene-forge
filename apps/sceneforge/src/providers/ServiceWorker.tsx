import { type PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";

import { ServiceWorkerContext } from "../contexts";
import { getMessageData } from "../lib/getMessageData";
import { type MessageDataObjectType, MessageDataType } from "../shared";

export type ServiceWorkerProviderProps = PropsWithChildren;

export type MessageDataPromiseObjectType = {
  reject?: (reason?: unknown) => void;
  resolve?: (value?: unknown) => void;
} & MessageDataObjectType;

const ServiceWorkerProvider = ({
  children,
}: ServiceWorkerProviderProps) => {
  const serviceWorkerRegistration = useRef<
    null | ServiceWorkerRegistration
  >(null);

  const [messages, setMessages] = useState<MessageDataPromiseObjectType[]>([]);

  const resolveMessage = useCallback((
    messageResults: MessageDataPromiseObjectType[],
    messageId: string
  ) => {
    const messagesToAcknowledge = messageResults.filter(
      message => (
        message.messageId === messageId
        && message.type !== MessageDataType.Acknowledge
        && !message.resolve
        && !message.reject
      )
    );

    const incomingMessagesToResolve = messageResults.filter(
      message => (
        message.messageId === messageId
        && message.type !== MessageDataType.Acknowledge
        && message.resolve
        && message.reject
      )
    );

    const payload = messagesToAcknowledge.map(message => (
      "payload" in message ? message.payload : undefined));

    for (const incomingMessageToResolve of incomingMessagesToResolve) {
      if (incomingMessageToResolve.resolve) {
        incomingMessageToResolve.resolve(payload);
      }
      else if (incomingMessageToResolve.reject) {
        incomingMessageToResolve.reject(payload);
      }
      else {
        console.error("Message to acknowledge not found", incomingMessageToResolve);
      }
    }
  }, []);

  const acknowledgeMessage = useCallback((message: MessageDataObjectType) => {
    if (message.type === MessageDataType.Acknowledge) {
      setMessages((previousMessages) => {
        resolveMessage(previousMessages, message.messageId);
        return previousMessages.filter(
          previousMessage => (
            previousMessage.messageId !== message.messageId
            && previousMessage.type !== MessageDataType.Acknowledge
          )
        );
      });
    }
    else {
      setMessages(previousMessages => [message, ...previousMessages]);
    }
  }, [resolveMessage]);

  useEffect(() => {
    if ("serviceWorker" in globalThis.navigator) {
      globalThis.navigator.serviceWorker
        .getRegistration().then((registration) => {
          serviceWorkerRegistration.current = registration ?? null;
          globalThis.navigator.serviceWorker.addEventListener("message", ({ data, source }) => {
            const acknowledgeMessageData = getMessageData(
              registration,
              data,
              source
            );
            if (acknowledgeMessageData) {
              acknowledgeMessage(acknowledgeMessageData);
            }
          });
        })
        .catch((error) => {
          console.error("Service Worker registration error:", error);
        });
    }
  }, [acknowledgeMessage, serviceWorkerRegistration]);

  return (
    <ServiceWorkerContext value={{
      messages,
      serviceWorkerRegistration,
      setMessages,
    }}
    >
      {children}
    </ServiceWorkerContext>
  );
};

export default ServiceWorkerProvider;
