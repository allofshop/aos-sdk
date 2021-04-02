import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { StringValidator } from '~/base/validator';
import Config from '~/config';

import { FindDto } from './type';
import { FindValidator } from './validator';

export async function getBoard(boardId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(boardId, 'boardId');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', `boards/${boardId}`, { content: 'json' });
}

export async function getBoards(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  if (Config.mode === 'DEVELOPMENT') {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', 'boards', { content: 'json' }, { query });
}
