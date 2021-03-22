import { ValueShouldBeEnum } from '~/base/error';
import {
  BooleanValidator,
  DateQueryValidator,
  NumberQueryValidator,
  SortQueryValidator,
  StringValidator,
} from '~/base/validator';

import { FindArticlesByBoardIdDto } from '../type';
import { ArticleStatus } from '../vo';

export class FindArticlesByBoardIdValidator {
  private stringValidator: StringValidator;
  private booleanValidator: BooleanValidator;
  private numberQueryValidator: NumberQueryValidator;
  private dateQueryValidator: DateQueryValidator;
  private sortQueryValidator: SortQueryValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.booleanValidator = new BooleanValidator();
    this.numberQueryValidator = new NumberQueryValidator();
    this.dateQueryValidator = new DateQueryValidator();
    this.sortQueryValidator = new SortQueryValidator();
  }

  public validate(query: FindArticlesByBoardIdDto, location: string) {
    if (query.title !== undefined) {
      this.stringValidator.validate(query.title, `${location}.title`);
    }

    if (query.content !== undefined) {
      this.stringValidator.validate(query.content, `${location}.content`);
    }

    if (query.boardSlug !== undefined) {
      this.stringValidator.validate(query.boardSlug, `${location}.boardSlug`);
    }

    if (query.boardId !== undefined) {
      this.stringValidator.validate(query.boardId, `${location}.boardId`);
    }

    if (query.authorDisplayName !== undefined) {
      this.stringValidator.validate(
        query.authorDisplayName,
        'query.authorDisplayName'
      );
    }

    if (query.authorUserId !== undefined) {
      this.stringValidator.validate(
        query.authorUserId,
        `${location}.authorUserId`
      );
    }

    if (query.isSecret !== undefined) {
      this.booleanValidator.validate(query.isSecret, `${location}.isSecret`);
    }

    if (query.status !== undefined) {
      this.validateStatus(query.status, `${location}.status`);
    }

    if (query.index !== undefined) {
      this.numberQueryValidator.validate(query.index, `${location}.index`);
    }

    if (query.createdAt !== undefined) {
      this.dateQueryValidator.validate(
        query.createdAt,
        `${location}.createdAt`
      );
    }

    if (query.boardCategoty !== undefined) {
      this.stringValidator.validate(
        query.boardCategoty,
        `${location}.boardCategoty`
      );
    }

    if (query.sort !== undefined) {
      this.sortQueryValidator.validate(query.sort, `${location}.sort`);
    }
  }

  private validateStatus(status: ArticleStatus, location: string) {
    if (status !== ArticleStatus.DRAFT && status !== ArticleStatus.PUBLISHED) {
      throw new ValueShouldBeEnum(location);
    }
  }
}
