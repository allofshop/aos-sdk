import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genWishlist } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';

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

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'POST',
    `users/me/wishlists`,
    { content: 'json' },
    { body }
  );
}

export async function addUserWishlistProduct(
  wishlistId: string,
  body: CreateWishlistProductDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(wishlistId, 'wishlistId');

  const createWishlistProductValidator: CreateWishlistProductValidator = new CreateWishlistProductValidator();
  createWishlistProductValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'POST',
    `users/me/wishlists/${wishlistId}/products`,
    { content: 'json' },
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

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'POST',
    `users/me/wishlists/default/products`,
    { content: 'json' },
    {
      body,
    }
  );
}

export async function getUserWishlists(query: FindWishlistsDto) {
  const findWishlistsValidator: FindWishlistsValidator = new FindWishlistsValidator();
  findWishlistsValidator.validate(query, 'query');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'GET',
    `users/me/wishlists`,
    { content: 'json' },
    { query }
  );
}

export async function getUserWishlist(wishlistId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(wishlistId, 'wishlistId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genWishlist();
  }

  return await lite.request('GET', `users/me/wishlists/${wishlistId}`);
}

export async function getUserDefaultWishlist() {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genWishlist();
  }

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

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genWishlist();
  }

  return await lite.request(
    'PATCH',
    `users/me/wishlists/${wishlistId}`,
    { content: 'json' },
    {
      body,
    }
  );
}

export async function updateUserDefaultWishlist(body: UpdateWishlistByIdDto) {
  const updateWishlistByIdValidator: UpdateWishlistByIdValidator = new UpdateWishlistByIdValidator();
  updateWishlistByIdValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'PATCH',
    `users/me/wishlists/default`,
    { content: 'json' },
    { body }
  );
}

export async function deleteUserWishlist(wishlistId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(wishlistId, 'wishlistId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    };
  }

  return await lite.request('DELETE', `users/me/wishlists/${wishlistId}`);
}

export async function deleteUserWishlistProduct(
  wishlistId: string,
  productId: string
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(wishlistId, 'wishlistId');
  stringValidator.validate(productId, 'productId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    };
  }

  return await lite.request(
    'DELETE',
    `users/me/wishlists/${wishlistId}/products/${productId}`,
    { content: 'json' }
  );
}

export async function deleteUserDefaultWishlist() {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    };
  }

  return await lite.request('DELETE', `users/me/wishlists/default`, {
    content: 'json',
  });
}

export async function deleteUserDefaultWishlistProduct(productId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(productId, 'productId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    };
  }

  return await lite.request(
    'DELETE',
    `users/me/wishlists/default/products/${productId}`,
    { content: 'json' }
  );
}
