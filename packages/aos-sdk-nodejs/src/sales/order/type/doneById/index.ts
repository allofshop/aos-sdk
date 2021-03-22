import { PayMethod } from '../../vo';

export type DoneByIdDto = {
  resultCode: string;
  resultMessage: string;
  authenticationToken: string;
  payMethod: PayMethod;
  merchantId: string;
  merchantOrderId: string;
  paymentPrice: number;
  reserved: string;
  transactionId: string;
  nextAppUrl: string;
  netCancelUrl: string;
};
