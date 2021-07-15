import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genCSDetail, genCSList } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';

import {
  CreateCustomerServiceDto,
  FindCustomerServicesDto,
  GetCustomerServiceStatsDto,
} from './type';
import {
  CreateCustomerServiceValidator,
  FindCustomerServicesValidator,
  GetCustomerServiceStatsValidator,
} from './validator';

export async function createUserCustomerService(
  body: CreateCustomerServiceDto
) {
  const createCustomerServiceValidator: CreateCustomerServiceValidator = new CreateCustomerServiceValidator();
  createCustomerServiceValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {
      data: { success: true },
    };
  }

  return await lite.request(
    'POST',
    `users/me/customerServices`,
    { content: 'json' },
    { body }
  );
}

export async function getUserCustomerService(customerServiceId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(customerServiceId, 'customerServiceId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genCSDetail();
  }

  return await lite.request(
    'GET',
    `users/me/customerServices/${customerServiceId}`
  );
}

// TODO: 서버에서 Dto가 정의되어 있지 않음
export async function updateUserCustomerService(
  customerServiceId: string,
  body: any
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(customerServiceId, 'customerServiceId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genCSDetail();
  }

  return await lite.request(
    'PATCH',
    `users/me/customerServices/${customerServiceId}`,
    { content: 'json' },
    { body }
  );
}

export async function deleteUserCustomerService(customerServiceId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(customerServiceId, 'customerServiceId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'DELETE',
    `users/me/customerServices/${customerServiceId}`,
    { content: 'json' }
  );
}

export async function getUserCustomerServices(query: FindCustomerServicesDto) {
  const findCustomerServicesValidator: FindCustomerServicesValidator = new FindCustomerServicesValidator();
  findCustomerServicesValidator.validate(query, 'query');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genCSList();
  }

  return await lite.request(
    'GET',
    `users/me/customerServices`,
    { content: 'json' },
    { query }
  );
}

export async function getUserCustomerServiceStats(
  query: GetCustomerServiceStatsDto
) {
  const getCustomerServiceStatsValidator: GetCustomerServiceStatsValidator = new GetCustomerServiceStatsValidator();
  getCustomerServiceStatsValidator.validate(query, 'query');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'GET',
    `users/me/customerServices/getStats`,
    { content: 'json' },
    {
      query,
    }
  );
}
