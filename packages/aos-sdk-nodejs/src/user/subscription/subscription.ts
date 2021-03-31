import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { StringValidator } from '~/base/validator';
import Config from '~/config';


import {
  CreateSubscriptionDto,
  FindSubscriptionsDto,
  UpdateSubscriptionByIdDto,
} from './type';
import {
  CreateSubscriptionValidator,
  FindSubscriptionsValidator,
  UpdateSubscriptionByIdValidator,
} from './validator';

export async function createUserSubscription(body: CreateSubscriptionDto) {
  const createSubscriptionValidator: CreateSubscriptionValidator = new CreateSubscriptionValidator();
  createSubscriptionValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('POST', `users/me/subscriptions`, { content: 'json' }, { body });
}

export async function getUserSubscription(subscriptionId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(subscriptionId, 'subscriptionId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', `users/me/subscriptions/${subscriptionId}`);
}

export async function updateUserSubscription(
  subscriptionId: string,
  body: UpdateSubscriptionByIdDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(subscriptionId, 'subscriptionId');

  const updateSubscriptionValidator: UpdateSubscriptionByIdValidator = new UpdateSubscriptionByIdValidator();
  updateSubscriptionValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'PATCH',
    `users/me/subscriptions/${subscriptionId}`,
    { content: 'json' },
    {
      body,
    }
  );
}

export async function deleteUserSubscription(subscriptionId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(subscriptionId, 'subscriptionId');

  return await lite.request(
    'DELETE',
    `users/me/subscriptions/${subscriptionId}`,
    { content: 'json' },
  );
}

export async function getUserSubscriptions(query: FindSubscriptionsDto) {
  const findSubscriptionsValidator: FindSubscriptionsValidator = new FindSubscriptionsValidator();
  findSubscriptionsValidator.validate(query, 'query');

  return await lite.request('GET', `users/me/subscriptions`, { content: 'json' }, { query });
}
