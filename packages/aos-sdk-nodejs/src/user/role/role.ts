import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import Config from '~/config';

// TODO: 서버 Dto 비어있음
export async function getUserRoles(query: any) {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'GET',
    `users/me/roles`,
    { content: 'json' },
    { query }
  );
}
