import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genUser, genWriteableOrderItem } from '~/_mock';
import Config from '~/config';

import {
  FindReviewWriteableOrderItemsDto,
  UpdatePasswordDto,
  UpdateUserDto,
} from './type';
import {
  FindReviewWriteableOrderItemsValidator,
  UpdatePasswordValidator,
  UpdateUserValidator,
} from './validator';

export async function getUser() {
  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genUser();
  }

  return await lite.request('GET', `users/me`);
}

export async function updateUser(body: UpdateUserDto) {
  const updateUserValidator: UpdateUserValidator = new UpdateUserValidator();
  updateUserValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genUser();
  }

  return await lite.request('PATCH', `users/me`, { body });
}

export async function deleteUser() {
  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    }
  }
  return await lite.request('DELETE', `users/me`);
}

export async function updatePassword(body: UpdatePasswordDto) {
  const updatePasswordValidator: UpdatePasswordValidator = new UpdatePasswordValidator();
  updatePasswordValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {
      success: true,
    };
  }

  return await lite.request('POST', `users/me/changePassword`, { body });
}

export async function getReviewWriteableOrderItems(
  query: FindReviewWriteableOrderItemsDto
) {
  const findReviewWriteableOrderItemsValidator: FindReviewWriteableOrderItemsValidator = new FindReviewWriteableOrderItemsValidator();
  findReviewWriteableOrderItemsValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genWriteableOrderItem();
  }

  return await lite.request(
    'GET',
    `users/me/orderItems/getReviewWriteableList`,
    {
      query,
    }
  );
}
