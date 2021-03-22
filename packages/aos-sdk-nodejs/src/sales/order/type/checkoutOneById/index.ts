import { Address } from './_address';
import { Orderer } from './_orderer';
import { Payment } from './_payment';
import { Recipient } from './_recipient';

export type CheckoutOneByIdDto = {
  productName?: string;
  orderer: Orderer;
  recipient: Recipient;
  couponIds?: string[];
  usingMileage?: number;
  address: Address;
  payment: Payment;
};
