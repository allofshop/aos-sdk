import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { StringValidator } from '~/base/validator';
import Config from '~/config';


import { CreateDto, UpdateOneByIdDto } from './type';
import { CreateValidator, UpdateOneByIdValidator } from './validator';

export async function createReviewComment(reviewId: string, body: CreateDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  const createValidator: CreateValidator = new CreateValidator();
  createValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('POST', `reviews/${reviewId}/comments`, { content: 'json' }, { body });
}

export async function getReviewComment(reviewId: string, commentId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');
  stringValidator.validate(commentId, 'commentId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request('GET', `reviews/${reviewId}/comments/${commentId}`);
}

export async function updateReviewComment(
  reviewId: string,
  commentId: string,
  body: UpdateOneByIdDto
) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');
  stringValidator.validate(commentId, 'commentId');

  const updateOneByIdValidator: UpdateOneByIdValidator = new UpdateOneByIdValidator();
  updateOneByIdValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'PATCH',
    `reviews/${reviewId}/comments/${commentId}`,
    { content: 'json' },
    {
      body,
    }
  );
}

export async function deleteReviewComment(reviewId: string, commentId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');
  stringValidator.validate(commentId, 'commentId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {};
  }

  return await lite.request(
    'DELETE',
    `reviews/${reviewId}/comments/${commentId}`
  );
}

//TODO: 서버 Dto에서 query가 비어있음
export async function getReviewComments(reviewId: string, query: any) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  return await lite.request('GET', `reviews/${reviewId}/comments`, { content: 'json' }, { query });
}
