import {
  NumberValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { UpdateItemByIdDto } from '../type/updateItemById';

export class UpdateItemByIdValidator {
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

  public validate(body: UpdateItemByIdDto, location: string) {
    this.objectValidator.validate(body, location);

    if (body.quantity !== undefined) {
      this.numberValidator.validate(body.quantity, `${location}.quantity`);
    }

    if (body.productVariant !== undefined) {
      this.stringValidator.validate(
        body.productVariant,
        `${location}.productVariant`
      );
    }

    if (body.couponIds !== undefined) {
      this.stringArrayValidator.validate(
        body.couponIds,
        `${location}.couponIds`
      );
    }
  }
}
