import { DateQuery } from '~/base/type';

import { OrderStatus } from '../../vo';
import { OrderSort } from './_sort';

export type FindOrdersDto = {
  createdAt?: DateQuery;
  status?: OrderStatus;
  sort?: OrderSort;
};
