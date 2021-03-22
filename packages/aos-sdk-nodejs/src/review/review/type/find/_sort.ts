import { SortType } from '~/base/vo';

export type ReviewSort = {
  createdAt?: SortType;
  reputationLike?: SortType;
  reputationDislike?: SortType;
  score?: SortType;
};
