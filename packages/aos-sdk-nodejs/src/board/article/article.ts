import * as lite from '@allofshop/aos-sdk-nodejs-lite';

import { genArticleDetail, genArticleList, genReputation } from '~/_mock';
import { StringValidator } from '~/base/validator';
import Config from '~/config';


import {
  CreateDto,
  FindArticlesByBoardIdDto,
  UpdateOneByIdDto,
  VoteDto,
} from './type';
import {
  CreateValidator,
  FindArticlesByBoardIdValidator,
  UpdateOneByIdValidator,
  VoteValidator,
} from './validator';

export async function createArticle(body: CreateDto) {
  const createValidator: CreateValidator = new CreateValidator();
  createValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genArticleDetail();
  }

  return await lite.request('POST', 'articles', { body });
}

export async function getArticle(articleId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(articleId, 'articleId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genArticleDetail();
  }

  return await lite.request('GET', `articles/${articleId}`);
}

export async function updateArticle(articleId: string, body: UpdateOneByIdDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(articleId, 'articleId');

  const updateOneByIdValidator: UpdateOneByIdValidator = new UpdateOneByIdValidator();
  updateOneByIdValidator.validate(body, 'body');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genArticleDetail();
  }

  return await lite.request('PATCH', `articles/${articleId}`, { body });
}

export async function deleteArticle(articleId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(articleId, 'articleId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    };
  }

  return await lite.request('DELETE', `articles/${articleId}`);
}

export async function getArticles(query: FindArticlesByBoardIdDto) {
  const findArticlesByBoardIdValidator: FindArticlesByBoardIdValidator = new FindArticlesByBoardIdValidator();
  findArticlesByBoardIdValidator.validate(query, 'query');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genArticleList();
  }

  return await lite.request('GET', 'articles', { query });
}

export async function voteArticle(articleId: string, body: VoteDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(articleId, 'articleId');

  const voteValidator: VoteValidator = new VoteValidator();
  voteValidator.validate(body, 'bodvalidate');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return await genReputation();
  }

  return await lite.request('POST', `articles/${articleId}/vote`, { body });
}

export async function cancelVoteArticle(articleId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(articleId, 'articleId');

  if (Config.mode === "DEVELOPMENT") {
    console.log(`[DEVELOPMENT]: `);
    return {
      deleted: true,
    };
  }

  return await lite.request('DELETE', `articles/${articleId}/vote`);
}
