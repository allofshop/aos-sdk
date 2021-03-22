import { ValueShouldBeArray } from '~/base/error';
import {
  NumberValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { CreateDto } from '../type/create';
import { OrderItem } from '../type/create/_orderItem';

class OrderItemArrayValidator {
  private stringValidator: StringValidator;
  private stringArrayValidator: StringArrayValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(items: OrderItem[], location: string) {
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

      this.numberValidator.validate(i.quantity, `${location}.quantity`);

      if (i.carrier !== undefined) {
        this.stringValidator.validate(i.carrier, `${location}.carrier`);
      }
    });
  }
}

export class CreateValidator {
  private objectValidator: ObjectValidator;
  private orderItemArrayValidator: OrderItemArrayValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.orderItemArrayValidator = new OrderItemArrayValidator();
  }

  public validate(body: CreateDto, location: string) {
    this.objectValidator.validate(body, location);
    this.orderItemArrayValidator.validate(body.items, `${location}.items`);
  }
}
