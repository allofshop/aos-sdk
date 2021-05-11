import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genShop } from '~/_mock';
import Config from '~/config';

export async function getCurrent() {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return genShop();
  }

  return await lite.request('GET', '', { content: 'json' }, {});
}
