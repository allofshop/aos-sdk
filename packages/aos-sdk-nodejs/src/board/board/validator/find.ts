import {
  BooleanValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { FindDto } from '../type';

export class FindValidator {
  private booleanValidator: BooleanValidator;
  private stringValidator: StringValidator;
  private stringArrayValidator: StringArrayValidator;
  private objectValidator: ObjectValidator;

  constructor() {
    this.booleanValidator = new BooleanValidator();
    this.stringValidator = new StringValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.objectValidator = new ObjectValidator();
  }

  public validate(query: FindDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.displayable !== undefined) {
      this.booleanValidator.validate(
        query.displayable,
        `${location}.displayable`
      );
    }

    if (query.categories !== undefined) {
      this.stringArrayValidator.validate(
        query.categories,
        `${location}.categories`
      );
    }

    if (query.slug !== undefined) {
      this.stringValidator.validate(query.slug, `${location}.slug`);
    }

    if (query.name !== undefined) {
      this.stringValidator.validate(query.name, `${location}.name`);
    }
  }
}
