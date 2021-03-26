import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genComment, genCommentList } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';


import { CreateDto, FindByArticleIdDto, UpdateOneByIdDto } from './type';
import {
  CreateValidator,
  FindByArticleIdValidator,
  UpdateOneByIdValidator,
} from './validator';

export async function createComment(
  boardId: string,
  articleId: string,
  body: CreateDto
) {
  const stringValidator = new StringValidator();
  stringValidator.validate(boardId, 'boardId');
  stringValidator.validate(articleId, 'articleId');

  const createValidator = new CreateValidator();
  createValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genComment();
  }

  return await lite.request(
    'POST',
    `boards/${boardId}/articles/${articleId}/comments`,
    { body }
  );
}

export async function updateComment(
  boardId: string,
  articleId: string,
  commentId: string,
  body: UpdateOneByIdDto
) {
  const stringValidator = new StringValidator();
  stringValidator.validate(boardId, 'boardId');
  stringValidator.validate(articleId, 'articleId');
  stringValidator.validate(commentId, 'commentId');

  const updateOneByIdValidator = new UpdateOneByIdValidator();
  updateOneByIdValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genComment();
  }

  return await lite.request(
    'PATCH',
    `boards/${boardId}/articles/${articleId}/comments/${commentId}`,
    { body }
  );
}

export async function deleteComment(
  boardId: string,
  articleId: string,
  commentId: string
) {
  const stringValidator = new StringValidator();
  stringValidator.validate(boardId, 'boardId');
  stringValidator.validate(articleId, 'articleId');
  stringValidator.validate(commentId, 'commentId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    };
  }

  return await lite.request(
    'DELETE',
    `boards/${boardId}/articles/${articleId}/comments/${commentId}`
  );
}

export async function getComments(
  boardId: string,
  articleId: string,
  query: FindByArticleIdDto
) {
  const stringValidator = new StringValidator();
  stringValidator.validate(boardId, 'boardId');
  stringValidator.validate(articleId, 'articleId');

  const findByArticleIdValidator = new FindByArticleIdValidator();
  findByArticleIdValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genCommentList();
  }

  return await lite.request(
    'GET',
    `boards/${boardId}/articles/${articleId}/comments`,
    { query }
  );
}
