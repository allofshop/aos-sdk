import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import {
  CheckoutOneByIdDto,
  CreateDto,
  CreateItemDto,
  UpdateItemByIdDto,
} from './type';
import {
  CheckoutOneByIdValidator,
  CreateItemValidator,
  CreateValidator,
  UpdateItemByIdValidator,
} from './validator';

export async function createCart(body: CreateDto) {
  const createValidator: CreateValidator = new CreateValidator();
  createValidator.validate(body, 'body');

  return await lite.request('POST', `carts`, { body });
}

export async function addCartItem(cartId: string, body: CreateItemDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  const createItemValidator: CreateItemValidator = new CreateItemValidator();
  createItemValidator.validate(body, 'body');

  return await lite.request('POST', `carts/${cartId}/items`, { body });
}

export async function addDefaultCartItem(body: CreateItemDto) {
  const createItemValidator: CreateItemValidator = new CreateItemValidator();
  createItemValidator.validate(body, 'body');

  return await lite.request('POST', `carts/default/items`, { body });
}

export async function getCart(cartId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  return await lite.request('GET', `carts/${cartId}`);
}

export async function getDefaultCart() {
  return await lite.request('GET', `carts/default`);
}

export async function updateCartItem(
  cartId: string,
  cartItemId: string,
  body: UpdateItemByIdDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');
  stringValidator.validate(cartItemId, 'cartItemId');

  const updateItemByIdValidator: UpdateItemByIdValidator = new UpdateItemByIdValidator();
  updateItemByIdValidator.validate(body, 'body');

  return await lite.request('PATCH', `carts/${cartId}/items/${cartItemId}`, {
    body,
  });
}

export async function updateDefaultCartItem(
  cartItemId: string,
  body: UpdateItemByIdDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartItemId, 'cartItemId');

  const updateItemByIdValidator: UpdateItemByIdValidator = new UpdateItemByIdValidator();
  updateItemByIdValidator.validate(body, 'body');

  return await lite.request('PATCH', `carts/default/items/${cartItemId}`, {
    body,
  });
}

export async function deleteCartItem(cartId: string, cartItemId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');
  stringValidator.validate(cartItemId, 'cartItemId');

  return await lite.request('DELETE', `carts/${cartId}/items/${cartItemId}`);
}

export async function deleteDefaultCartItem(cartItemId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartItemId, 'cartItemId');

  return await lite.request('DELETE', `carts/default/items/${cartItemId}`);
}

export async function deleteCartItems(cartId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  return await lite.request('DELETE', `carts/${cartId}/items`);
}

export async function deleteDefaultCartItems() {
  return await lite.request('DELETE', `carts/default/items`);
}

export async function deleteCart(cartId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  return await lite.request('DELETE', `carts/${cartId}`);
}

export async function validateoutCart(
  cartId: string,
  body: CheckoutOneByIdDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  const checkoutOneByIdValidator: CheckoutOneByIdValidator = new CheckoutOneByIdValidator();
  checkoutOneByIdValidator.validate(body, 'body');

  return await lite.request('POST', `carts/${cartId}/validateout`, { body });
}

export async function validateoutDefaultCart(body: CheckoutOneByIdDto) {
  const checkoutOneByIdValidator: CheckoutOneByIdValidator = new CheckoutOneByIdValidator();
  checkoutOneByIdValidator.validate(body, 'body');

  return await lite.request('POST', `carts/default/validateout`, { body });
}
