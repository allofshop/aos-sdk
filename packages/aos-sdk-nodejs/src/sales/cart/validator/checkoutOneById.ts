import { ObjectValidator, StringArrayValidator } from '~/base/validator';

import { CheckoutOneByIdDto } from '../type';

export class CheckoutOneByIdValidator {
  private objectValidator: ObjectValidator;
  private stringArrayValidator: StringArrayValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringArrayValidator = new StringArrayValidator();
  }

  public validate(body: CheckoutOneByIdDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringArrayValidator.validate(
      body.cartItemIds,
      `${location}.cartItemIds`
    );
  }
}
