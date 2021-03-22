import { ObjectValidator, StringValidator } from '~/base/validator';

import { UpdateOneByIdDto } from '../type';
import { CommentAuthor } from '../type/updateOneById/_author';

class AuthorValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(author: CommentAuthor, location: string) {
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
  private objectValidator: ObjectValidator;
  private authorValidator: AuthorValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.objectValidator = new ObjectValidator();
    this.authorValidator = new AuthorValidator();
  }

  public validate(body: UpdateOneByIdDto, location: string) {
    this.objectValidator.validate(body, location);

    if (body.author !== undefined) {
      this.authorValidator.validate(body.author, `${location}.author`);
    }

    if (body.content !== undefined) {
      this.stringValidator.validate(body.content, `${location}.content`);
    }
  }
}
