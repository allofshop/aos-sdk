import { ObjectValidator, StringValidator } from '~/base/validator';

import { IssueOneByInputDto } from '../type';

export class IssueOneByInputValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(body: IssueOneByInputDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.input, `${location}.input`);
  }
}
