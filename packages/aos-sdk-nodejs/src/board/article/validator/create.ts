import { ValueShouldBeEnum } from '~/base/error';
import {
  BooleanValidator,
  DateValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { CreateDto } from '../type';
import { ArticleAuthor } from '../type/create/_author';
import { ArticleStatus } from '../vo';

class AuthorValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(author: ArticleAuthor, location: string) {
    this.objectValidator.validate(author, location);
    this.stringValidator.validate(
      author.displayName,
      `${location}.displayName`
    );
    if (author.password !== undefined) {
      this.stringValidator.validate(author.password, `${location}.password`);
    }
  }
}

export class CreateValidator {
  private stringValidator: StringValidator;
  private booleanValidator: BooleanValidator;
  private stringArrayValidator: StringArrayValidator;
  private dateValidator: DateValidator;
  private objectValidator: ObjectValidator;
  private authorValidator: AuthorValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.booleanValidator = new BooleanValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.dateValidator = new DateValidator();
    this.objectValidator = new ObjectValidator();
    this.authorValidator = new AuthorValidator();
  }

  public validate(body: CreateDto, location: string) {
    this.objectValidator.validate(body, location);

    if (body.boardId !== undefined) {
      this.stringValidator.validate(body.boardId, `${location}.boardId`);
    }

    if (body.boardSlug !== undefined) {
      this.stringValidator.validate(body.boardSlug, `${location}.boardSlug`);
    }

    this.stringValidator.validate(body.title, `${location}.title`);
    this.stringValidator.validate(body.content, `${location}.content`);
    this.authorValidator.validate(body.author, `${location}.author`);

    if (body.isSecret !== undefined) {
      this.booleanValidator.validate(body.isSecret, `${location}.isSecret`);
    }

    if (body.attachments !== undefined) {
      this.stringArrayValidator.validate(
        body.attachments,
        `${location}.attachments`
      );
    }

    if (body.featuredImage !== undefined) {
      this.stringValidator.validate(
        body.featuredImage,
        `${location}.featuredImage`
      );
    }

    if (body.isNotice !== undefined) {
      this.booleanValidator.validate(body.isNotice, `${location}.isNotice`);
    }

    if (body.status !== undefined) {
      this.validateStatus(body.status, `${location}.status`);
    }

    if (body.scheduledAt !== undefined) {
      this.dateValidator.validate(body.scheduledAt, `${location}.scheduledAt`);
    }

    if (body.parent !== undefined) {
      this.stringValidator.validate(body.parent, `${location}.parent`);
    }
  }

  private validateStatus(status: ArticleStatus, location: string) {
    if (status !== ArticleStatus.DRAFT && status !== ArticleStatus.PUBLISHED) {
      throw new ValueShouldBeEnum(location);
    }
  }
}
