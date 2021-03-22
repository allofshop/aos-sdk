import {
  NumberValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { UpdateOneByIdDto } from '../type';

export class UpdateOneByIdValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private stringArrayValidator: StringArrayValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(body: UpdateOneByIdDto, location: string) {
    this.objectValidator.validate(body, location);

    if (body.content !== undefined) {
      this.stringValidator.validate(body.content, `${location}.content`);
    }

    if (body.score !== undefined) {
      this.numberValidator.validate(body.score, `${location}.score`);
    }

    if (body.images !== undefined) {
      this.stringArrayValidator.validate(body.images, `${location}.images`);
    }
  }
}
