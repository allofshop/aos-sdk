import { SortType } from '~/base/vo';

export type SubscriptionSort = {
  createdAt?: SortType;
  previousAt?: SortType;
  nextAt?: SortType;
  estimatedNextAt?: SortType;
};
