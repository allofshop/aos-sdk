import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { StringValidator } from '~/base/validator';
import Config from '~/config';


import { FindDto } from './type';
import { FindValidator } from './validator';

export async function getVendor(vendorId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(vendorId, 'vendorId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', `vendors/${vendorId}`, { content: 'json' });
}

export async function getVendors(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', 'vendors', { content: 'json' }, { query });
}
