import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genOrderItem } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';

export async function getUserOrderItem(orderItemId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(orderItemId, 'orderItemId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /users/me/orderItems/${orderItemId}`);
    return await genOrderItem();
  }

  return await lite.request('GET', `users/me/orderItems/${orderItemId}`, {
    content: 'json',
  });
}
