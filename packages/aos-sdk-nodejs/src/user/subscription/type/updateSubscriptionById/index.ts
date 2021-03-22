import { Orderer } from './_orderer';
import { Plan } from './_plan';
import { Schedule } from './_schedule';

export type UpdateSubscriptionByIdDto = {
  orderer?: Orderer;
  plan?: Plan;
  schedule?: Schedule;
};
