import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genUserCouponList } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';

import { FindCouponsDto } from './type';
import { FindCouponsValidator } from './validator';

export async function getUserCoupon(userCouponId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(userCouponId, ' userCouponId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', `users/me/coupons/${userCouponId}`);
}

export async function getUserCoupons(query: FindCouponsDto) {
  const findCouponsValidator: FindCouponsValidator = new FindCouponsValidator();
  findCouponsValidator.validate(query, 'query');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genUserCouponList();
  }

  return await lite.request(
    'GET',
    `users/me/coupons`,
    { content: 'json' },
    { query }
  );
}
