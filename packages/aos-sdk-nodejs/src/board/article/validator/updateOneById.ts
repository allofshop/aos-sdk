import {
  BooleanValidator,
  DateValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { UpdateOneByIdDto } from '../type';
import { ArticleAuthor } from '../type/updateOneById/author';

class AuthorValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(author: ArticleAuthor, location: string) {
    this.objectValidator.validate(author, location);

    if (author.displayName !== undefined) {
      this.stringValidator.validate(
        author.displayName,
        `${location}.displayName`
      );
    }

    if (author.password !== undefined) {
      this.stringValidator.validate(author.password, `${location}.password`);
    }
  }
}

export class UpdateOneByIdValidator {
  private stringValidator: StringValidator;
  private booleanValidator: BooleanValidator;
  private stringArrayValidator: StringArrayValidator;
  private dateValidator: DateValidator;
  private authorValidator: AuthorValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.booleanValidator = new BooleanValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.dateValidator = new DateValidator();
    this.authorValidator = new AuthorValidator();
  }

  public validate(body: UpdateOneByIdDto, location: string) {
    if (body.title !== undefined) {
      this.stringValidator.validate(body.title, `${location}.title`);
    }

    if (body.content !== undefined) {
      this.stringValidator.validate(body.content, `${location}.content`);
    }

    if (body.author !== undefined) {
      this.authorValidator.validate(body.author, `${location}.author`);
    }

    if (body.isSecret !== undefined) {
      this.booleanValidator.validate(body.isSecret, `${location}.isSecret`);
    }

    if (body.attachmnets !== undefined) {
      this.stringArrayValidator.validate(
        body.attachmnets,
        `${location}.attachmnets`
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

    if (body.scheduleAt !== undefined) {
      this.dateValidator.validate(body.scheduleAt, `${location}.scheduleAt`);
    }
  }
}
