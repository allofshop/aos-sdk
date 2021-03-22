import { PaymentType, ReceiptType } from '../../vo';

export type PaymentDepositCashReceipt = {
  type: ReceiptType;
  value: string;
};

export type PaymentDeposit = {
  wireTransferId: string;
  depositor: string;
  cashReceipt?: PaymentDepositCashReceipt;
};

export type Payment = {
  type: PaymentType;
  deposit?: PaymentDeposit;
  pgId?: string;
};
