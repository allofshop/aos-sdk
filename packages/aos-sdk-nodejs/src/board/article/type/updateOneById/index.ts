import { ArticleAuthor } from './author';

export type UpdateOneByIdDto = {
  title?: string;
  content?: string;
  author?: ArticleAuthor;
  isSecret?: boolean;
  attachmnets?: string[];
  featuredImage?: string;
  isNotice?: boolean;
  scheduleAt?: Date;
};
