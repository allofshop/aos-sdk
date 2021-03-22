import { DateQuery } from '~/base/type';

import { MileageSort } from './_sort';

export type FindMileagesDto = {
  available?: boolean;
  expiredAt?: DateQuery;
  createdAt?: DateQuery;
  sort?: MileageSort;
};
