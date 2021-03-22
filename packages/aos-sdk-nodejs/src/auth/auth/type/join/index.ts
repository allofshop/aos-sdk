import { Gender } from '~/base/vo';

import { Name } from './_name';

export type JoinDto = {
  username: string;
  password: string;
  gender?: Gender;
  name: Name;
};
