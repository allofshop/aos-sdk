import * as lite from '@allofshop/aos-sdk-nodejs-lite';

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
  return await lite.request('GET', `users/me`);
}

export async function updateUser(body: UpdateUserDto) {
  const updateUserValidator: UpdateUserValidator = new UpdateUserValidator();
  updateUserValidator.validate(body, 'body');

  return await lite.request('PATCH', `users/me`, { body });
}

export async function deleteUser() {
  return await lite.request('DELETE', `users/me`);
}

export async function updatePassword(body: UpdatePasswordDto) {
  const updatePasswordValidator: UpdatePasswordValidator = new UpdatePasswordValidator();
  updatePasswordValidator.validate(body, 'body');

  return await lite.request('POST', `users/me/changePassword`, { body });
}

export async function getReviewWriteableOrderItems(
  query: FindReviewWriteableOrderItemsDto
) {
  const findReviewWriteableOrderItemsValidator: FindReviewWriteableOrderItemsValidator = new FindReviewWriteableOrderItemsValidator();
  findReviewWriteableOrderItemsValidator.validate(query, 'query');

  return await lite.request(
    'GET',
    `users/me/orderItems/getReviewWriteableList`,
    {
      query,
    }
  );
}
