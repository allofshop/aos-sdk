import { ObjectValidator, StringValidator } from '~/base/validator';

import { CreateDto } from '../type';
import { CommentAuthor } from '../type/create/_author';

class AuthorValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(author: CommentAuthor, location: string) {
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
  private objectValidator: ObjectValidator;
  private authorValidator: AuthorValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.objectValidator = new ObjectValidator();
    this.authorValidator = new AuthorValidator();
  }

  public validate(body: CreateDto, location: string) {
    this.objectValidator.validate(body, location);

    this.authorValidator.validate(body.author, `${location}.author`);
    this.stringValidator.validate(body.content, `${location}.content`);
    if (body.parent !== undefined) {
      this.stringValidator.validate(body.parent, `${location}.parent`);
    }
  }
}
