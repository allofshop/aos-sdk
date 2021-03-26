import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genShowcase, genShowcases } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';


export async function getShowcase(slug: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(slug, 'slug');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /showcases`);
    return genShowcase(slug);
  }

  return await lite.request('GET', `showcases/${slug}`);
}

// TODO: 서버에서 query Dto가 비어있음
export async function getShowcases(query: any) {
  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /showcases`);
    return genShowcases(query.slug);
  }
  return await lite.request('GET', 'showcases', { query });
}
