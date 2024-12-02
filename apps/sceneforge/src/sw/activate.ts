import { type MessageDataObjectType } from "../shared";

export type CustomMessageEvent = {
  data: MessageDataObjectType;
  source: MessageEventSource | null;
} & Event;

export const activate = () => {
  self.addEventListener("activate", () => {});

  self.addEventListener("message", ({ data: { type }, source }: CustomMessageEvent) => {
    if (!source) return;

    switch (type) {
      default:
        break;
    }
  });
};
