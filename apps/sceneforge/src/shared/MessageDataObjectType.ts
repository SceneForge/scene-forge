import type { MessageDataType } from "./MessageDataType";

type ResponseAcknowledgeObjectType = {
  type: MessageDataType.Acknowledge;
};

export type MessageDataObjectType = {
  messageId: string;
} & (
  | ResponseAcknowledgeObjectType
);
