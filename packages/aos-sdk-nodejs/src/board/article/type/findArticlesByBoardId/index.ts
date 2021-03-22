import { DateQuery, NumberQuery } from '~/base/type';

import { ArticleStatus } from '../../vo';
import { ArticleSort } from './_sort';

export type FindArticlesByBoardIdDto = {
  title?: string;
  content?: string;
  boardSlug?: string;
  boardId?: string;
  authorDisplayName?: string;
  authorUserId?: string;
  isSecret?: boolean;
  status?: ArticleStatus;
  index?: NumberQuery;
  createdAt?: DateQuery;
  boardCategoty?: string;
  sort?: ArticleSort;
};
