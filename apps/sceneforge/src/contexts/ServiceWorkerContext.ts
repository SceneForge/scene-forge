import { createContext, type Dispatch, type RefObject, type SetStateAction } from "react";

import type { MessageDataObjectType } from "../shared";

export type ServiceWorkerContextType = {
  messages: MessageDataObjectType[];
  serviceWorkerRegistration?: RefObject<null | ServiceWorkerRegistration>;
  setMessages: Dispatch<SetStateAction<MessageDataObjectType[]>>;
};

export const ServiceWorkerContext = createContext<ServiceWorkerContextType>({
  messages: [],
  serviceWorkerRegistration: undefined,
  setMessages: () => void 0,
});
