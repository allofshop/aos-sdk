import {
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { CreateWishlistDto } from '../type';

export class CreateWishlistValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private stringArrayValidator: StringArrayValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.stringArrayValidator = new StringArrayValidator();
  }

  public validate(body: CreateWishlistDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.name, `${location}.name`);
    this.stringArrayValidator.validate(body.products, `${location}.products`);

    if (body.description !== undefined) {
      this.stringValidator.validate(
        body.description,
        `${location}.description`
      );
    }
  }
}
