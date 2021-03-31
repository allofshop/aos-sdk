import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { StringValidator } from '~/base/validator';
import Config from '~/config';


import { FindOneByInputDto, IssueOneByInputDto } from './type';
import { FindOneByInputValidator, IssueOneByInputValidator } from './validator';

export async function getCoupon(query: FindOneByInputDto) {
  const findOneByInputValidator: FindOneByInputValidator = new FindOneByInputValidator();
  findOneByInputValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', 'coupons', { content: 'json' }, { query });
}

export async function issueCouponByInput(body: IssueOneByInputDto) {
  const issueOneByInputValidator: IssueOneByInputValidator = new IssueOneByInputValidator();
  issueOneByInputValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('POST', 'coupons', { content: 'json' }, { body });
}

export async function issueCouponByDownload(counponId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(counponId, 'counponId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('POST', `coupons/${counponId}/issue`, { content: 'json' });
}
