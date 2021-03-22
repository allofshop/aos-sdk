import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import {
  CheckoutOneByIdDto,
  CreateDto,
  DoneByIdDto,
  UpdateItemByIdDto,
  UpdateOneByIdDto,
} from './type';
import {
  CheckoutOneByIdValidator,
  CreateValidator,
  DoneByIdValidator,
  UpdateItemByIdValidator,
  UpdateOneByIdValidator,
} from './validator';

export async function createOrder(body: CreateDto) {
  const createBodyValidator: CreateValidator = new CreateValidator();
  createBodyValidator.validate(body, 'body');

  return await lite.request('POST', `orders`, { body });
}

export async function getOrder(orderId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(orderId, 'orderId');

  return await lite.request('GET', `orders/${orderId}`);
}

export async function updateOrder(orderId: string, body: UpdateOneByIdDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(orderId, 'orderId');

  const updateBodyValidator: UpdateOneByIdValidator = new UpdateOneByIdValidator();
  updateBodyValidator.validate(body, 'body');

  return await lite.request('PATCH', `orders/${orderId}`, { body });
}

export async function updateOrderItem(
  orderId: string,
  orderItemId: string,
  body: UpdateItemByIdDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(orderId, 'orderId');
  stringValidator.validate(orderItemId, 'orderItemId');

  const updateItemBodyValidator: UpdateItemByIdValidator = new UpdateItemByIdValidator();
  updateItemBodyValidator.validate(body, 'body');

  return await lite.request(
    'PATCH',
    `orders/${orderId}/orderItems/${orderItemId}`,
    {
      body,
    }
  );
}

export async function deleteOrderItem(orderId: string, orderItemId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(orderId, 'orderId');
  stringValidator.validate(orderItemId, 'orderItemId');

  return await lite.request(
    'DELETE',
    `orders/${orderId}/orderItems/${orderItemId}`
  );
}

export async function checkoutOrder(orderId: string, body: CheckoutOneByIdDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(orderId, 'orderId');

  const checkoutOneByIdValidator: CheckoutOneByIdValidator = new CheckoutOneByIdValidator();
  checkoutOneByIdValidator.validate(body, 'body');

  return await lite.request('POST', `orders/${orderId}/checkout`, { body });
}

export async function doneOrder(orderId: string, body: DoneByIdDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(orderId, 'orderId');

  const doneByIdValidator: DoneByIdValidator = new DoneByIdValidator();
  doneByIdValidator.validate(body, 'body');

  return await lite.request('POST', `orders/${orderId}/done`, { body });
}
