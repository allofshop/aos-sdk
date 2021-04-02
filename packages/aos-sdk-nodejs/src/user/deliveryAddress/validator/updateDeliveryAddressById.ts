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

    if (address.address1 !== undefined) {
      this.stringValidator.validate(address.address1, `${location}.address1`);
    }

    if (address.address2 !== undefined) {
      this.stringValidator.validate(address.address2, `${location}.address2`);
    }

    // if (address.region !== undefined) {
    //   this.stringValidator.validate(address.region, `${location}.region`);
    // }
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

    if (body.mainPhoneNumber !== undefined) {
      this.stringValidator.validate(
        body.mainPhoneNumber,
        `${location}.mainPhoneNumber`
      );
    }

    if (body.subPhoneNumber !== undefined) {
      this.stringValidator.validate(
        body.subPhoneNumber,
        `${location}.subPhoneNumber`
      );
    }

    if (body.address !== undefined) {
      this.addressValidator.validate(body.address, `${location}.address`);
    }
  }
}
