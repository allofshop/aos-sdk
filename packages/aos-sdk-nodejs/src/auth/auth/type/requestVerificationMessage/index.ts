import { RequestVerificationMessageType } from '../../vo';

export type RequestVerificationMessageDto = {
  type: RequestVerificationMessageType;
  value: string;
};
