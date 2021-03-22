import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { StringValidator } from '~/base/validator';

import { FindDto, FindTreeDto } from './type';
import { FindTreeValidator, FindValidator } from './validator';

export async function getCategory(categoryId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(categoryId, 'categoryId');

  return await lite.request('GET', `categories/${categoryId}`);
}

export async function getCategoryTree(query: FindTreeDto) {
  const findTreeValidator: FindTreeValidator = new FindTreeValidator();
  findTreeValidator.validate(query, 'query');

  return await lite.request('GET', `categories/tree`, { query });
}

export async function getCategories(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  return await lite.request('GET', `categories`, { query });
}
