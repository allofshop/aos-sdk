import { ObjectValidator, StringValidator } from '~/base/validator';

import { CreateDto } from '../type';

export class CreateValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(body: CreateDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.content, `${location}.content`);
  }
}
