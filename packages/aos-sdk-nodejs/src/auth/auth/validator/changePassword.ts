import { ObjectValidator, StringValidator } from '~/base/validator';

import { ChangePasswordDto } from '../type/changePassword';

export class ChangePasswordValidator {
  private stringValidator: StringValidator;
  private objectValidator: ObjectValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.objectValidator = new ObjectValidator();
  }

  public validate(body: ChangePasswordDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.new, `${location}.new`);
    this.stringValidator.validate(
      body.verificationToken,
      `${location}.verificationToken`
    );
  }
}
