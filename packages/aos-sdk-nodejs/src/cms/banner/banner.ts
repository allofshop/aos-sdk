import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { FindDto } from './type';
import { FindValidator } from './validator';

export async function getBanners(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  return await lite.request('GET', 'banners', { query });
}
