import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genReputation, genReviewDetail, genReviewList } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';


import { CreateDto, FindDto, UpdateOneByIdDto, VoteDto } from './type';
import {
  CreateValidator,
  FindValidator,
  UpdateOneByIdValidator,
  VoteValidator,
} from './validator';

export async function createReview(body: CreateDto) {
  const createValidator: CreateValidator = new CreateValidator();
  createValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /reviews`);
    return {
      success: true,
    };
  }

  return await lite.request('POST', 'reviews', { content: 'json' }, { body });
}

export async function getReview(reviewId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /reviews/${reviewId}`);
    return await genReviewDetail()
  }

  return await lite.request('GET', `reviews/${reviewId}`, { content: 'json' });
}

export async function updateReview(reviewId: string, body: UpdateOneByIdDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  const updateOneByIdValidator: UpdateOneByIdValidator = new UpdateOneByIdValidator();
  updateOneByIdValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /reviews/${reviewId}`);
    return await genReviewDetail()
  }

  return await lite.request('PATCH', `reviews/${reviewId}`, { content: 'json' }, { body });
}

export async function deleteReview(reviewId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /reviews/${reviewId}`);
    return { deleted: true }
  }

  return await lite.request('DELETE', `reviews/${reviewId}`, { content: 'json' });
}

export async function getReviews(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /reviews`);
    return await genReviewList();
  }

  return await lite.request('GET', 'reviews', { content: 'json' }, { query });
}

export async function voteReview(reviewId: string, body: VoteDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  const voteValidator: VoteValidator = new VoteValidator();
  voteValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /reviews/${reviewId}/vote`);
    return await genReputation();
  }

  return await lite.request('POST', `reviews/${reviewId}/vote`, { content: 'json' }, { body });
}

export async function cancelVoteReview(reviewId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: /reviews/${reviewId}/vote`);
    return { deleted: true }
  }

  return await lite.request('DELETE', `reviews/${reviewId}/vote`, { content: 'json' });
}
