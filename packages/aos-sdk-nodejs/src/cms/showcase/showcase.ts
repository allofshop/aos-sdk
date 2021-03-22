import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

export async function getShowcase(slug: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(slug, 'slug');

  return await lite.request('GET', `showcases/${slug}`);
}

// TODO: 서버에서 query Dto가 비어있음
export async function getShowcases(query: any) {
  return await lite.request('GET', 'showcases', { query });
}
