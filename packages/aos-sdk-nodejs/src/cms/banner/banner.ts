import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genBanners } from '~/_mock';
import Config from '~/config';

import { FindDto } from './type';
import { FindValidator } from './validator';

export async function getBanners(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /banners`);
    return await genBanners(query.sectionName);
  }

  return await lite.request('GET', 'banners', { query });
}
