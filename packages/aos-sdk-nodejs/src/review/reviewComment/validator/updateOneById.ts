import { ObjectValidator, StringValidator } from '~/base/validator';

import { UpdateOneByIdDto } from '../type';

export class UpdateOneByIdValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(body: UpdateOneByIdDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.content, `${location}.content`);
  }
}
