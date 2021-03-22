import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { FindMileagesDto } from './type';
import { FindMileagesValidator } from './validator';

export async function getUserMileages(query: FindMileagesDto) {
  const findMileagesValidator: FindMileagesValidator = new FindMileagesValidator();
  findMileagesValidator.validate(query, 'query');

  return await lite.request('GET', `users/me/mileages`, { query });
}
