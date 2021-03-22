import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import {
  CreateDeliveryAddressDto,
  FindDeliveryAdressesDto,
  UpdateDeliveryAddressByIdDto,
} from './type';
import {
  CreateDeliveryAddressValidator,
  FindDeliveryAddressesValidator,
  UpdateDeliveryAddressByIdValidator,
} from './validator';

export async function createUserDeliveryAddress(
  body: CreateDeliveryAddressDto
) {
  const createDeliveryAddressValidator: CreateDeliveryAddressValidator = new CreateDeliveryAddressValidator();
  createDeliveryAddressValidator.validate(body, 'body');

  return await lite.request('POST', `users/me/deliveryAddresses`, { body });
}

export async function getDefaultUserDeilveryAddress() {
  return await lite.request('GET', `users/me/deliveryAddresses/default`);
}

export async function updateUserDeliveryAddress(
  deliveryAddressId: string,
  body: UpdateDeliveryAddressByIdDto
) {
  const stringValidator = new StringValidator();
  stringValidator.validate(deliveryAddressId, 'deliveryAddressId');

  const updateDeliveryAddressByIdValidator: UpdateDeliveryAddressByIdValidator = new UpdateDeliveryAddressByIdValidator();
  updateDeliveryAddressByIdValidator.validate(body, 'body');

  return await lite.request(
    'PATCH',
    `users/me/deliveryAddresses/${deliveryAddressId}`,
    { body }
  );
}

export async function deleteUserDeliveryAddress(deliveryAddressId: string) {
  const stringValidator = new StringValidator();
  stringValidator.validate(deliveryAddressId, 'deliveryAddressId');

  return await lite.request(
    'DELETE',
    `users/me/deliveryAddresses/${deliveryAddressId}`
  );
}

export async function getUserDeliveryAddresses(query: FindDeliveryAdressesDto) {
  const findDeliveryAdrressesValidator: FindDeliveryAddressesValidator = new FindDeliveryAddressesValidator();
  findDeliveryAdrressesValidator.validate(query, 'query');

  return await lite.request('GET', `users/me/deliveryAddresses`, { query });
}
