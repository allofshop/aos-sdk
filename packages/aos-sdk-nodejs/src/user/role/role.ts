import * as lite from '@allofshop/aos-sdk-nodejs-lite';

// TODO: 서버 Dto 비어있음
export async function getUserRoles(query: any) {
  return await lite.request('GET', `users/me/roles`, { query });
}
