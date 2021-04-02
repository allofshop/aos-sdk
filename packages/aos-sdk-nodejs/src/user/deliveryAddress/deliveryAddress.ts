import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genUserDeliveryAddress, genUserDeliveryAddressList } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';

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

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genUserDeliveryAddress();
  }

  return await lite.request(
    'POST',
    `users/me/deliveryAddresses`,
    { content: 'json' },
    { body }
  );
}

export async function getDefaultUserDeliveryAddress() {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genUserDeliveryAddress();
  }

  return await lite.request('GET', `users/me/deliveryAddresses/default`);
}

export async function getUserDeliveryAddress(deliveryAddressId: string) {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genUserDeliveryAddress();
  }

  return await lite.request(
    'GET',
    `users/me/deliveryAddresses/${deliveryAddressId}`,
    { content: 'json' }
  );
}

export async function updateUserDeliveryAddress(
  deliveryAddressId: string,
  body: UpdateDeliveryAddressByIdDto
) {
  const stringValidator = new StringValidator();
  stringValidator.validate(deliveryAddressId, 'deliveryAddressId');

  const updateDeliveryAddressByIdValidator: UpdateDeliveryAddressByIdValidator = new UpdateDeliveryAddressByIdValidator();
  updateDeliveryAddressByIdValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genUserDeliveryAddress();
  }

  return await lite.request(
    'PATCH',
    `users/me/deliveryAddresses/${deliveryAddressId}`,
    { content: 'json' },
    { body }
  );
}

export async function deleteUserDeliveryAddress(deliveryAddressId: string) {
  const stringValidator = new StringValidator();
  stringValidator.validate(deliveryAddressId, 'deliveryAddressId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    };
  }

  return await lite.request(
    'DELETE',
    `users/me/deliveryAddresses/${deliveryAddressId}`,
    { content: 'json' }
  );
}

export async function getUserDeliveryAddresses(query: FindDeliveryAdressesDto) {
  const findDeliveryAdrressesValidator: FindDeliveryAddressesValidator = new FindDeliveryAddressesValidator();
  findDeliveryAdrressesValidator.validate(query, 'query');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return await genUserDeliveryAddressList();
  }

  return await lite.request(
    'GET',
    `users/me/deliveryAddresses`,
    { content: 'json' },
    { query }
  );
}
