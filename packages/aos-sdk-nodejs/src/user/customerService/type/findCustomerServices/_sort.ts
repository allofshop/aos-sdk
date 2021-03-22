import { SortType } from '~/base/vo';

export type CustomerServiceSort = {
  orderCreatedAt?: SortType;
  createdAt?: SortType;
  completedAt?: SortType;
};
