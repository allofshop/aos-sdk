import { request } from '@allofshop/aos-sdk-nodejs-lite';

import { genChangePassword, genJoin, genLogin, genLogout } from '~/_mock';
import Config from '~/config';

import {
  ChangePasswordDto,
  JoinDto,
  LogoutDto,
  RequestVerificationMessageDto,
} from './type';
import {
  ChangePasswordValidator,
  JoinValidator,
  LogoutValidator,
  RequestVerificationMessageValidator,
} from './validator';



export async function login() {
  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /auth/login`);
    return await genLogin(Config.mode);
  }

  return await request('POST', 'auth/login');
}

export async function join(body: JoinDto) {
  const joinValidator: JoinValidator = new JoinValidator();
  joinValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /auth/join`);
    return await genJoin();
  }

  return await request('POST', 'auth/join', { body });
}

export async function logout(body: LogoutDto) {
  const logoutValidator: LogoutValidator = new LogoutValidator();
  logoutValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /auth/logout`);
    return await genLogout();
  }

  return await request('POST', 'auth/logout', { body });
}

export async function snsLogin() {
  return await request('POST', 'auth/snsLogin');
}

export async function requestVerificationMessage(
  body: RequestVerificationMessageDto
) {
  const requestVerificationMessageValidator = new RequestVerificationMessageValidator();
  requestVerificationMessageValidator.validate(body, 'body');

  return await request('POST', 'auth/requestVerificationMessage', {
    body,
  });
}

export async function changePassword(body: ChangePasswordDto) {
  const changePasswordValidator = new ChangePasswordValidator();
  changePasswordValidator.validate(body, 'body');
  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /auth/changePassword`);
    return await genChangePassword();
  }
  return await request('POST', 'auth/changePassword', { body });
}

export async function guestLogin() {
  return await request('POST', 'auth/guestLogin');
}
