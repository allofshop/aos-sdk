import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genProductDetail, genProductList } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';

import { FindDto } from './type';
import { FindValidator } from './validator';

export async function getProduct(productId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(productId, 'productId');

  if (Config.mode === "DEVELOPMENT") {
    return genProductDetail();
  }

  return await lite.request('GET', `products/${productId}`);
}

export async function getProducts(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    return genProductList();
  }

  return await lite.request('GET', 'products', { query });
}
