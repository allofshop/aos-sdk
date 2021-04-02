import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genFile } from '~/_mock';
import Config from '~/config';

export async function uploadFile(formData: FormData) {
  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: /files`);
    return await genFile();
  }

  return await lite.request(
    'GET',
    'files',
    { content: 'formdata' },
    { formData }
  );
}
