import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genPaymentMethod } from '~/_mock';
import Config from '~/config';

export async function getPaymentMethod() {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /paymentMethod`);
    return await genPaymentMethod();
  }

  return await lite.request('GET', `paymentMethod`, { content: 'json' });
}
