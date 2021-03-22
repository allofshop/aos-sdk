import * as lite from '@allofshop/aos-sdk-nodejs-lite';

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

lite.initialize({
  version: 1,
  apiKey: 'afsadfads',
  secret: 'dasd',
  shopId: '60497fab9813703f69cd46e4',
});

export async function login() {
  return await lite.request('POST', 'auth/login');
}

export async function join(body: JoinDto) {
  const joinValidator: JoinValidator = new JoinValidator();
  joinValidator.validate(body, 'body');

  return await lite.request('POST', 'auth/join', { body });
}

export async function logout(body: LogoutDto) {
  const logoutValidator: LogoutValidator = new LogoutValidator();
  logoutValidator.validate(body, 'body');

  return await lite.request('POST', 'auth/logout', { body });
}

export async function snsLogin() {
  return await lite.request('POST', 'auth/snsLogin');
}

export async function requestVerificationMessage(
  body: RequestVerificationMessageDto
) {
  const requestVerificationMessageValidator = new RequestVerificationMessageValidator();
  requestVerificationMessageValidator.validate(body, 'body');

  return await lite.request('POST', 'auth/requestVerificationMessage', {
    body,
  });
}

export async function changePassword(body: ChangePasswordDto) {
  const changePasswordValidator = new ChangePasswordValidator();
  changePasswordValidator.validate(body, 'body');

  return await lite.request('POST', 'auth/changePassword', { body });
}

export async function guestLogin() {
  return await lite.request('POST', 'auth/guestLogin');
}
