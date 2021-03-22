import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { StringValidator } from '~/base/validator';

import { FindOneByInputDto, IssueOneByInputDto } from './type';
import { FindOneByInputValidator, IssueOneByInputValidator } from './validator';

export async function getCoupon(query: FindOneByInputDto) {
  const findOneByInputValidator: FindOneByInputValidator = new FindOneByInputValidator();
  findOneByInputValidator.validate(query, 'query');

  return await lite.request('GET', 'coupons', { query });
}

export async function issueCouponByInput(body: IssueOneByInputDto) {
  const issueOneByInputValidator: IssueOneByInputValidator = new IssueOneByInputValidator();
  issueOneByInputValidator.validate(body, 'body');

  return await lite.request('POST', 'coupons', { body });
}

export async function issueCouponByDownload(counponId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(counponId, 'counponId');

  return await lite.request('POST', `coupons/${counponId}/issue`);
}
