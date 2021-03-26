import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { StringValidator } from '~/base/validator';
import Config from '~/config';



// TODO: 서버 Dto가 정해져 있지 않습니다.
export async function createUserCard(body: any) {
  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('POST', `users/me/cards`, { body });
}

export async function getUserCard(cardId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cardId, 'cardId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', `users/me/cards/${cardId}`);
}

export async function getDefaultUserCard() {
  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', `users/me/cards/default`);
}

export async function deleteUserCard(cardId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(cardId, 'cardId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('DELETE', `users/me/cards/${cardId}`);
}

// TODO: 서버 Dto가 정해져 있지 않습니다.
export async function getUserCards(query: any) {
  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', `users/me/cards`, { query });
}
