import { StringValidator } from '~/base/validator';
import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { FindDto } from './type';
import { FindValidator } from './validator';

export async function getBoard(boardId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(boardId, 'boardId');

  return await lite.request('GET', `boards/${boardId}`);
}

export async function getBoards(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  return await lite.request('GET', 'boards', { query });
}
