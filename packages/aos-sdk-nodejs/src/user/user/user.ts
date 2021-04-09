import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genUser, genWritableOrderItem } from '~/_mock';
import Config from '~/config';

import {
  FindReviewWritableOrderItemsDto,
  UpdatePasswordDto,
  UpdateUserDto,
} from './type';
import {
  FindReviewWritableOrderItemsValidator,
  UpdatePasswordValidator,
  UpdateUserValidator,
} from './validator';

export async function getUser() {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genUser();
  }

  return await lite.request('GET', `users/me`);
}

export async function updateUser(body: UpdateUserDto) {
  const updateUserValidator: UpdateUserValidator = new UpdateUserValidator();
  updateUserValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genUser();
  }

  return await lite.request('PATCH', `users/me`, { content: 'json' }, { body });
}

export async function deleteUser() {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    };
  }
  return await lite.request('DELETE', `users/me`);
}

export async function updatePassword(body: UpdatePasswordDto) {
  const updatePasswordValidator: UpdatePasswordValidator = new UpdatePasswordValidator();
  updatePasswordValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {
      success: true,
    };
  }

  return await lite.request(
    'POST',
    `users/me/changePassword`,
    { content: 'json' },
    { body }
  );
}

export async function getReviewWritableOrderItems(
  query: FindReviewWritableOrderItemsDto
) {
  const findReviewWritableOrderItemsValidator: FindReviewWritableOrderItemsValidator = new FindReviewWritableOrderItemsValidator();
  findReviewWritableOrderItemsValidator.validate(query, 'query');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genWritableOrderItem();
  }

  return await lite.request(
    'GET',
    `users/me/orderItems/getReviewWritableList`,
    { content: 'json' },
    {
      query,
    }
  );
}
