import { DateQuery, NumberQuery } from '~/base/type';

import { ProductSort } from './_sort';

export type FindDto = {
  vendorIds?: string[];
  ids?: string[];
  displayable?: boolean;
  sellable?: boolean;
  names?: string[];
  codes?: string[];
  customCodes?: string[];
  brandCodes?: string[];
  manufactureCodes?: string[];
  supplierCodes?: string[];
  tags?: string[];
  price?: NumberQuery;
  retailPrice?: NumberQuery;
  grossPrice?: NumberQuery;
  createdAt?: DateQuery;
  updatedAt?: DateQuery;
  categoryIds?: string[];
  includeSubCategory?: boolean;
  stock?: NumberQuery;
  safetyStock?: NumberQuery;
  weight?: NumberQuery;
  sort?: ProductSort;
};
