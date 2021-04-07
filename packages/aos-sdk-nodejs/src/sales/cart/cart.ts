import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import {
  genCartDetail,
  genCartItem,
  genCartItemUpdate,
  genOrder,
} from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';

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

  return await lite.request('POST', `carts`, { content: 'json' }, { body });
}

export async function addCartItem(cartId: string, body: CreateItemDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  const createItemValidator: CreateItemValidator = new CreateItemValidator();
  createItemValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/${cartId}/items`);
    return await genCartItem();
  }

  return await lite.request(
    'POST',
    `carts/${cartId}/items`,
    { content: 'json' },
    { body }
  );
}

export async function addDefaultCartItem(body: CreateItemDto) {
  const createItemValidator: CreateItemValidator = new CreateItemValidator();
  createItemValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/default/items`);
    return await genCartItem();
  }

  return await lite.request(
    'POST',
    `carts/default/items`,
    { content: 'json' },
    { body }
  );
}

export async function getCart(cartId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/${cartId}`);
    return await genCartDetail();
  }

  return await lite.request('GET', `carts/${cartId}`, { content: 'json' });
}

export async function getDefaultCart() {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/default`);
    return await genCartDetail();
  }
  return await lite.request('GET', `carts/default`, { content: 'json' });
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

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/${cartId}/items/${cartItemId}`);
    return await genCartItemUpdate();
  }

  return await lite.request(
    'PATCH',
    `carts/${cartId}/items/${cartItemId}`,
    { content: 'json' },
    {
      body,
    }
  );
}

export async function updateDefaultCartItem(
  cartItemId: string,
  body: UpdateItemByIdDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartItemId, 'cartItemId');

  const updateItemByIdValidator: UpdateItemByIdValidator = new UpdateItemByIdValidator();
  updateItemByIdValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/default/items/${cartItemId}`);
    return await genCartItem();
  }

  return await lite.request(
    'PATCH',
    `carts/default/items/${cartItemId}`,
    { content: 'json' },
    {
      body,
    }
  );
}

export async function deleteCartItem(cartId: string, cartItemId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');
  stringValidator.validate(cartItemId, 'cartItemId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/${cartId}/items/${cartItemId}`);
    return {
      deleted: true,
    };
  }

  return await lite.request('DELETE', `carts/${cartId}/items/${cartItemId}`);
}

export async function deleteDefaultCartItem(cartItemId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartItemId, 'cartItemId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/default/items/${cartItemId}`);
    return {
      deleted: true,
    };
  }

  return await lite.request('DELETE', `carts/default/items/${cartItemId}`, {
    content: 'json',
  });
}

export async function deleteCartItems(cartId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/${cartId}/items`);
    return {
      deleted: true,
    };
  }

  return await lite.request('DELETE', `carts/${cartId}/items`);
}

export async function deleteDefaultCartItems() {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/default/items`);
    return {
      deleted: true,
    };
  }

  return await lite.request('DELETE', `carts/default/items`);
}

export async function deleteCart(cartId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /carts/${cartId}`);
    return {
      deleted: true,
    };
  }

  return await lite.request('DELETE', `carts/${cartId}`, { content: 'json' });
}

export async function checkoutCart(cartId: string, body: CheckoutOneByIdDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cartId, 'cartId');

  const checkoutOneByIdValidator: CheckoutOneByIdValidator = new CheckoutOneByIdValidator();
  checkoutOneByIdValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genOrder();
  }

  return await lite.request(
    'POST',
    `carts/${cartId}/checkout`,
    { content: 'json' },
    { body }
  );
}

export async function checkoutDefaultCart(body: CheckoutOneByIdDto) {
  const checkoutOneByIdValidator: CheckoutOneByIdValidator = new CheckoutOneByIdValidator();
  checkoutOneByIdValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genOrder();
  }

  return await lite.request(
    'POST',
    `carts/default/checkout`,
    { content: 'json' },
    { body }
  );
}
