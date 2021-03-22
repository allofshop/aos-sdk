import { CommentAuthor } from './_author';

export type UpdateOneByIdDto = {
  author?: CommentAuthor;
  content?: string;
};
