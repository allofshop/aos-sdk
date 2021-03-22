import { ArticleStatus } from '../../vo';
import { ArticleAuthor } from './_author';

export type CreateDto = {
  boardId?: string;
  boardSlug?: string;
  title: string;
  content: string;
  author: ArticleAuthor;
  isSecret?: boolean;
  attachments?: string[];
  featuredImage?: string;
  isNotice?: boolean;
  status?: ArticleStatus;
  scheduledAt?: Date;
  parent?: string;
};
