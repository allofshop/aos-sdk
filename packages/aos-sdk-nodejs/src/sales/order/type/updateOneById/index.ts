import { Orderer } from './_orderer';
import { Recipient } from './_recipient';

export type UpdateOneByIdDto = {
  orderer?: Orderer;
  recipient?: Recipient;
  couponIds?: string[];
  usingMileage?: number;
};
