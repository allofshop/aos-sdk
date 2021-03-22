import { ObjectValidator, StringValidator } from '~/base/validator';

import { CreateWishlistProductDto } from '../type';

export class CreateWishlistProductValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(body: CreateWishlistProductDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.productId, `${location}.productId`);
  }
}
