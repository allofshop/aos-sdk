import {
  NumberValidator,
  ObjectValidator,
  StringValidator,
} from '~/base/validator';

import { FindTreeDto } from '../type';

export class FindTreeValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(query: FindTreeDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.parentId !== undefined) {
      this.stringValidator.validate(query.parentId, `${location}.parentId`);
    }

    if (query.maximumLevel !== undefined) {
      this.numberValidator.validate(
        query.maximumLevel,
        `${location}.maximumLevel`
      );
    }
  }
}
