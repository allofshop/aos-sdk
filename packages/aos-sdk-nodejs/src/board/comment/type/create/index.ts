import { CommentAuthor } from './_author';

export type CreateDto = {
  author: CommentAuthor;
  content: string;
  parent?: string;
};
