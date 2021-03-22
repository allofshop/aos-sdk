import { ValueShouldBeArray } from '~/base/error';
import {
  NumberValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { CreateDto } from '../type';
import { CartItem } from '../type/create/_item';

class CartItemArrayValidator {
  private stringValidator: StringValidator;
  private stringArrayValidator: StringArrayValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(items: CartItem[], location: string) {
    if (typeof items !== 'object' || items.length === undefined) {
      throw new ValueShouldBeArray(location);
    }

    items.map((i) => {
      this.stringValidator.validate(i.product, `${location}.product`);

      if (i.productVariant !== undefined) {
        this.stringValidator.validate(
          i.productVariant,
          `${location}.productVariant`
        );
      }

      if (i.optionValues !== undefined) {
        this.stringArrayValidator.validate(
          i.optionValues,
          `${location}.optionValues`
        );
      }

      if (i.quantity !== undefined) {
        this.numberValidator.validate(i.quantity, `${location}.quantity`);
      }
    });
  }
}

export class CreateValidator {
  private objectValidator: ObjectValidator;
  private cartItemArrayValidator: CartItemArrayValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.cartItemArrayValidator = new CartItemArrayValidator();
  }

  public validate(body: CreateDto, location: string) {
    this.objectValidator.validate(body, location);
    this.cartItemArrayValidator.validate(body.items, `${location}.items`);
  }
}
