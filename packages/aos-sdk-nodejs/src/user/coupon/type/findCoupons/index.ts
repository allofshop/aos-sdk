import { DateQuery } from '~/base/type';

import { CouponSort } from './_sort';

export type FindCouponsDto = {
  usedAt?: DateQuery;
  availableDate?: Date;
  sort?: CouponSort;
};
