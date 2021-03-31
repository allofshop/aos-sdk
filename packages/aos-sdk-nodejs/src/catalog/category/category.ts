import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genCategoryList } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';


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

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /categories/tree`);
    return await genCategoryList();
  }

  return await lite.request('GET', `categories/tree`, { content: 'json' }, { query });
}

export async function getCategories(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /categories`);
    return await genCategoryList();
  }

  return await lite.request('GET', `categories`, { content: 'json' }, { query });
}
