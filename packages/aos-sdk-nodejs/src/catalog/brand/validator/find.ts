import { ObjectValidator, StringArrayValidator } from '~/base/validator';

import { FindDto } from '../type';

export class FindValidator {
  private objectValidator: ObjectValidator;
  private stringArrayValidator: StringArrayValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringArrayValidator = new StringArrayValidator();
  }

  public validate(query: FindDto, location: string) {
    this.objectValidator.validate(query, location);
    if (query.ids !== undefined) {
      this.stringArrayValidator.validate(query.ids, `${location}.ids`);
    }
    if (query.codes !== undefined) {
      this.stringArrayValidator.validate(query.codes, `${location}.codes`);
    }
    if (query.names !== undefined) {
      this.stringArrayValidator.validate(query.names, `${location}.names`);
    }
  }
}
