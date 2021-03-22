import { DateQuery } from '~/base/type';

import { SubscriptionSort } from './_sort';

export type FindSubscriptionsDto = {
  createdAt?: DateQuery;
  previousAt?: DateQuery;
  nextAt?: DateQuery;
  estimatedNextAt?: DateQuery;
  sort?: SubscriptionSort;
};
