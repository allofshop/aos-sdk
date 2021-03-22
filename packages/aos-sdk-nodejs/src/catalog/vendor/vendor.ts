import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { FindDto } from './type';
import { FindValidator } from './validator';

export async function getVendor(vendorId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(vendorId, 'vendorId');

  return await lite.request('GET', `vendors/${vendorId}`);
}

export async function getVendors(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  return await lite.request('GET', 'vendors', { query });
}
