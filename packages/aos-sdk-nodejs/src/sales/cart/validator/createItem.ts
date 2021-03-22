import {
  NumberValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { CreateItemDto } from '../type';

export class CreateItemValidator {
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

  public validate(body: CreateItemDto, location: string) {
    this.objectValidator.validate(body, location);

    this.stringValidator.validate(body.product, `${location}.product`);

    if (body.productVariant !== undefined) {
      this.stringValidator.validate(
        body.productVariant,
        `${location}.productVariant`
      );
    }

    if (body.optionValues !== undefined) {
      this.stringArrayValidator.validate(
        body.optionValues,
        `${location}.optionValues`
      );
    }

    this.numberValidator.validate(body.quantity, `${location}.quantity`);
  }
}
