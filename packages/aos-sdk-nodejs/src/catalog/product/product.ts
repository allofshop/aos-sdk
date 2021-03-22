import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { FindDto } from './type';
import { FindValidator } from './validator';

export async function getProduct(productId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(productId, 'productId');

  return await lite.request('GET', `products/${productId}`);
}

export async function getProducts(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  return await lite.request('GET', 'products', { query });
}
