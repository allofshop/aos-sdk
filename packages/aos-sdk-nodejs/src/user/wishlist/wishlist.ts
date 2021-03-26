import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import {
  CreateWishlistDto,
  CreateWishlistProductDto,
  FindWishlistsDto,
  UpdateWishlistByIdDto,
} from './type';
import {
  CreateWishlistProductValidator,
  CreateWishlistValidator,
  FindWishlistsValidator,
  UpdateWishlistByIdValidator,
} from './validator';

export async function createUserWishlist(body: CreateWishlistDto) {
  const createWishlistValidator: CreateWishlistValidator = new CreateWishlistValidator();
  createWishlistValidator.validate(body, 'body');

  return await lite.request('POST', `users/me/wishlists`, { body });
}

export async function addUserWishlistProduct(
  wishlistId: string,
  body: CreateWishlistProductDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(wishlistId, 'wishlistId');

  const createWishlistProductValidator: CreateWishlistProductValidator = new CreateWishlistProductValidator();
  createWishlistProductValidator.validate(body, 'body');

  return await lite.request(
    'POST',
    `users/me/wishlists/${wishlistId}/products`,
    {
      body,
    }
  );
}

export async function addUserDefaultWishlistProduct(
  body: CreateWishlistProductDto
) {
  const createWishlistProductValidator: CreateWishlistProductValidator = new CreateWishlistProductValidator();
  createWishlistProductValidator.validate(body, 'body');

  return await lite.request('POST', `users/me/wishlists/default/products`, {
    body,
  });
}

export async function getUserWishlists(query: FindWishlistsDto) {
  const findWishlistsValidator: FindWishlistsValidator = new FindWishlistsValidator();
  findWishlistsValidator.validate(query, 'query');

  return await lite.request('GET', `users/me/wishlists`, { query });
}

export async function getUserWishlist(wishlistId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(wishlistId, 'wishlistId');

  return await lite.request('GET', `users/me/wishlists/${wishlistId}`);
}

export async function getUserDefaultWishlist() {
  return await lite.request('GET', `users/me/wishlists/default`);
}

export async function updateUserWishlist(
  wishlistId: string,
  body: UpdateWishlistByIdDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(wishlistId, 'wishlistId');

  const updateWishlistByIdValidator: UpdateWishlistByIdValidator = new UpdateWishlistByIdValidator();
  updateWishlistByIdValidator.validate(body, 'body');

  return await lite.request('PATCH', `users/me/wishlists/${wishlistId}`, {
    body,
  });
}

export async function updateUserDefaultWishlist(body: UpdateWishlistByIdDto) {
  const updateWishlistByIdValidator: UpdateWishlistByIdValidator = new UpdateWishlistByIdValidator();
  updateWishlistByIdValidator.validate(body, 'body');

  return await lite.request('PATCH', `users/me/wishlists/default`, { body });
}

export async function deleteUserWishlist(wishlistId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(wishlistId, 'wishlistId');

  return await lite.request('DELETE', `users/me/wishlists/${wishlistId}`);
}

export async function deleteUserWishlistProduct(
  wishlistId: string,
  productId: string
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(wishlistId, 'wishlistId');
  stringValidator.validate(productId, 'productId');

  return await lite.request(
    'DELETE',
    `users/me/wishlists/${wishlistId}/products/${productId}`
  );
}

export async function deleteUserDefaultWishlist() {
  return await lite.request('DELETE', `users/me/wishlists/default`);
}

export async function deleteUserDefaultWishlistProduct(productId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(productId, 'productId');

  return await lite.request(
    'DELETE',
    `users/me/wishlists/default/products/${productId}`
  );
}
