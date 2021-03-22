import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { FindCouponsDto } from './type';
import { FindCouponsValidator } from './validator';

export async function getUserCoupon(userCouponId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(userCouponId, ' userCouponId');

  return await lite.request('GET', `users/me/coupons/${userCouponId}`);
}

export async function getUserCoupons(query: FindCouponsDto) {
  const findCouponsValidator: FindCouponsValidator = new FindCouponsValidator();
  findCouponsValidator.validate(query, 'query');

  return await lite.request('GET', `users/me/coupons`, { query });
}
