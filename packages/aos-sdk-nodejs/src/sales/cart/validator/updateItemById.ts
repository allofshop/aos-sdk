import {
  NumberValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { UpdateItemByIdDto } from '../type';

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

    if (body.productVariantId !== undefined) {
      this.stringValidator.validate(
        body.productVariantId,
        `${location}.productVariantId`
      );
    }

    if (body.optionValues !== undefined) {
      this.stringArrayValidator.validate(
        body.optionValues,
        `${location}.optionValues`
      );
    }

    if (body.quantity !== undefined) {
      this.numberValidator.validate(body.quantity, `${location}.quantity`);
    }
  }
}
