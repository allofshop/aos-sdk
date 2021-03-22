import {
  BooleanValidator,
  ObjectValidator,
  StringValidator,
} from '~/base/validator';

import { UpdateDeliveryAddressByIdDto } from '../type';
import { Address } from '../type/updateDeliveryAddressById/_address';

class AddressValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(address: Address, location: string) {
    this.objectValidator.validate(address, location);

    if (address.zipCode !== undefined) {
      this.stringValidator.validate(address.zipCode, `${location}.zipCode`);
    }

    if (address.basic !== undefined) {
      this.stringValidator.validate(address.basic, `${location}.basic`);
    }

    if (address.locality !== undefined) {
      this.stringValidator.validate(address.locality, `${location}.locality`);
    }

    if (address.region !== undefined) {
      this.stringValidator.validate(address.region, `${location}.region`);
    }
  }
}

export class UpdateDeliveryAddressByIdValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private booleanValidator: BooleanValidator;
  private addressValidator: AddressValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.booleanValidator = new BooleanValidator();
    this.addressValidator = new AddressValidator();
  }

  public validate(body: UpdateDeliveryAddressByIdDto, location: string) {
    this.objectValidator.validate(body, location);

    if (body.isDefault !== undefined) {
      this.booleanValidator.validate(body.isDefault, `${location}.isDefault`);
    }

    if (body.name !== undefined) {
      this.stringValidator.validate(body.name, `${location}.name`);
    }

    if (body.recipientName !== undefined) {
      this.stringValidator.validate(
        body.recipientName,
        `${location}.recipientName`
      );
    }

    if (body.mobilePhone !== undefined) {
      this.stringValidator.validate(
        body.mobilePhone,
        `${location}.mobilePhone`
      );
    }

    if (body.homePhone !== undefined) {
      this.stringValidator.validate(body.homePhone, `${location}.homePhone`);
    }

    if (body.address !== undefined) {
      this.addressValidator.validate(body.address, `${location}.address`);
    }
  }
}
