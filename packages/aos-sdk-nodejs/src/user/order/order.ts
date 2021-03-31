import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genOrder, getOrderList, getRealOrderDetail, getRealOrderList } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';


import { FindOrdersDto } from './type';
import { FindOrdersValidator } from './validator';

export async function getUserOrder(orderId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(orderId, 'orderId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /users/me/orders/${orderId}`);
    return await getRealOrderDetail();
  }

  return await lite.request('GET', `users/me/orders/${orderId}`, { content: 'json' });
}

export async function getUserOrders(query: FindOrdersDto) {
  const findOrdersValidator: FindOrdersValidator = new FindOrdersValidator();
  findOrdersValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /users/me/orders`);
    return await getRealOrderList();
  }

  return await lite.request('GET', `users/me/orders`, { content: 'json' }, { query });
}
