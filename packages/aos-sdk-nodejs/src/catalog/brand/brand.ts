import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { StringValidator } from '~/base/validator';
import Config from '~/config';


import { FindDto } from './type';
import { FindValidator } from './validator';

export async function getBrand(brandId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(brandId, 'brandId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', `brands/${brandId}`);
}

export async function getBrands(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', 'brands', { query });
}
