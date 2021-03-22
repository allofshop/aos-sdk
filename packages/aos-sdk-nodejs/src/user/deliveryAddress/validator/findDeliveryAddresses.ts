import { ObjectValidator, StringValidator } from '~/base/validator';

import { FindDeliveryAdressesDto } from '../type';

export class FindDeliveryAddressesValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(query: FindDeliveryAdressesDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.name !== undefined) {
      this.stringValidator.validate(query.name, `${location}.name`);
    }
  }
}
