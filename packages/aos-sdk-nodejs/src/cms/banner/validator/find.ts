import { ObjectValidator, StringValidator } from '~/base/validator';

import { FindDto } from '../type';

export class FindValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(query: FindDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.code !== undefined) {
      this.stringValidator.validate(query.code, `${location}.code`);
    }
  }
}
