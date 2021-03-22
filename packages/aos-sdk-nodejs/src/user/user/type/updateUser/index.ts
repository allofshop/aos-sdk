import { Gender } from '~/base/vo';

import { Name } from './_name';
import { Phone } from './_phone';

export type UpdateUserDto = {
  birthdate?: Date;
  gender?: Gender;
  name?: Name;
  nickname?: string;
  phone?: Phone;
  avatar?: string;
};
