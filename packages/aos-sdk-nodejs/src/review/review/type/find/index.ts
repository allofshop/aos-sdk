import { DateQuery, NumberQuery } from '~/base/type';

import { ReviewSort } from './_sort';

export type FindDto = {
  score?: NumberQuery;
  hasImage?: boolean;
  productId?: string;
  productVariantId?: string;
  createdAt?: DateQuery;
  content?: string;
  sort?: ReviewSort;
};
