import { ObjectValidator, StringValidator } from '~/base/validator';

import { UpdatePasswordDto } from '../type';

export class UpdatePasswordValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(body: UpdatePasswordDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.current, `${location}.current`);
    this.stringValidator.validate(body.new, `${location}.new`);
  }
}
