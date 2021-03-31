import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genUserMileageList } from '~/_mock';
import Config from '~/config';

import { FindMileagesDto } from './type';
import { FindMileagesValidator } from './validator';

export async function getUserMileages(query: FindMileagesDto) {
  const findMileagesValidator: FindMileagesValidator = new FindMileagesValidator();
  findMileagesValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genUserMileageList();
  }

  return await lite.request('GET', `users/me/mileages`, { content: 'json' }, { query });
}
