import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { FindOrdersDto } from './type';
import { FindOrdersValidator } from './validator';

export async function getUserOrder(orderId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(orderId, 'orderId');

  return await lite.request('GET', `users/me/orders/${orderId}`);
}

export async function getUserOrders(query: FindOrdersDto) {
  const findOrdersValidator: FindOrdersValidator = new FindOrdersValidator();
  findOrdersValidator.validate(query, 'query');

  return await lite.request('GET', `users/me/orders`, { query });
}
