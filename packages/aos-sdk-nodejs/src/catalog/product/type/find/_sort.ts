import { SortType } from '~/base/vo';

export type ProductSort = {
  createdAt?: SortType;
  updatedAt?: SortType;
  name?: SortType;
  price?: SortType;
};
