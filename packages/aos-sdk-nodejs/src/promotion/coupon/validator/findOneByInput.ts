import { ObjectValidator, StringValidator } from '~/base/validator';

import { FindOneByInputDto } from '../type';

export class FindOneByInputValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(query: FindOneByInputDto, location: string) {
    this.objectValidator.validate(query, location);
    this.stringValidator.validate(query.input, `${location}.input`);
  }
}
