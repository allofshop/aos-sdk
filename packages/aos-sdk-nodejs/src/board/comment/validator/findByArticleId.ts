import { ObjectValidator, StringValidator } from '~/base/validator';

import { FindByArticleIdDto } from '../type';

export class FindByArticleIdValidator {
  private stringValidator: StringValidator;
  private objectValidator: ObjectValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.objectValidator = new ObjectValidator();
  }

  public validate(query: FindByArticleIdDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.content !== undefined) {
      this.stringValidator.validate(query.content, `${location}.content`);
    }
  }
}
