import { Orderer } from './_orderer';
import { Plan } from './_plan';
import { Schedule } from './_schedule';

export type CreateSubscriptionDto = {
  orderer: Orderer;
  plan: Plan;
  product: string;
  productVariant?: string;
  schedule: Schedule;
};
