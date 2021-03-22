import {
  BooleanValidator,
  ObjectValidator,
  StringValidator,
} from '~/base/validator';

import { UpdateWishlistByIdDto } from '../type';

export class UpdateWishlistByIdValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private booleanValidator: BooleanValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.booleanValidator = new BooleanValidator();
  }

  public validate(body: UpdateWishlistByIdDto, location: string) {
    this.objectValidator.validate(body, location);

    if (body.isDefault !== undefined) {
      this.booleanValidator.validate(body.isDefault, `${location}.isDefault`);
    }

    if (body.name !== undefined) {
      this.stringValidator.validate(body.name, `${location}.name`);
    }

    if (body.description !== undefined) {
      this.stringValidator.validate(
        body.description,
        `${location}.description`
      );
    }
  }
}
