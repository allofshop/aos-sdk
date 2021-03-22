import { ObjectValidator, StringValidator } from '~/base/validator';

import { LogoutDto } from '../type';

export class LogoutValidator {
  private stringValidator: StringValidator;
  private objectValidator: ObjectValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.objectValidator = new ObjectValidator();
  }

  public validate(body: LogoutDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.tokenId, `${location}.tokenId`);
  }
}
