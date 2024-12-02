import type { MessageDataObjectType } from "../shared";

export const getMessageData = (
  registration?: ServiceWorkerRegistration,
  data?: unknown,
  source?: MessageEventSource | null
): MessageDataObjectType | undefined => {
  if (registration && source && source === registration.active && typeof data === "object" && !Array.isArray(data) && data !== null && "messageId" in data && "type" in data) {
    return data as MessageDataObjectType;
  }
};
