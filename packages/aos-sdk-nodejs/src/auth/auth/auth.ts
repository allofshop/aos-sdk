import { request, setAuthorization } from '@allofshop/aos-sdk-nodejs-lite';

import { genChangePassword, genJoin, genLogin, genLogout } from '~/_mock';
import Config from '~/config';

import {
  ChangePasswordDto,
  JoinDto,
  LoginDto,
  LogoutDto,
  RequestVerificationMessageDto,
} from './type';
import {
  ChangePasswordValidator,
  JoinValidator,
  LogoutValidator,
  RequestVerificationMessageValidator,
} from './validator';

export async function login(body: LoginDto) {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /auth/login`);
    return await genLogin(Config.secret);
  }

  const response = await request<{ access_token: string }>(
    'POST',
    'auth/login',
    { content: 'json' },
    { body }
  );

  setAuthorization(response.data.access_token);
  return response;
}

export async function join(body: JoinDto) {
  const joinValidator: JoinValidator = new JoinValidator();
  joinValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /auth/join`);
    return await genJoin();
  }

  return await request('POST', 'auth/join', { content: 'json' }, { body });
}

export async function logout(body: LogoutDto) {
  const logoutValidator: LogoutValidator = new LogoutValidator();
  logoutValidator.validate(body, 'body');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /auth/logout`);
    return await genLogout();
  }

  return await request('POST', 'auth/logout', { content: 'json' }, { body });
}

export async function snsLogin() {
  return await request('POST', 'auth/snsLogin');
}

export async function requestVerificationMessage(
  body: RequestVerificationMessageDto
) {
  const requestVerificationMessageValidator = new RequestVerificationMessageValidator();
  requestVerificationMessageValidator.validate(body, 'body');

  return await request(
    'POST',
    'auth/requestVerificationMessage',
    { content: 'json' },
    {
      body,
    }
  );
}

export async function changePassword(body: ChangePasswordDto) {
  const changePasswordValidator = new ChangePasswordValidator();
  changePasswordValidator.validate(body, 'body');
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /auth/changePassword`);
    return await genChangePassword();
  }
  return await request(
    'POST',
    'auth/changePassword',
    { content: 'json' },
    { body }
  );
}

export async function guestLogin() {
  return await request('POST', 'auth/guestLogin');
}
