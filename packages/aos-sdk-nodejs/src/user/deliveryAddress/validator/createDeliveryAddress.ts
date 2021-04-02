import { ObjectValidator, StringValidator } from '~/base/validator';

import { CreateDeliveryAddressDto } from '../type';
import { Address } from '../type/createDeliveryAddress/_address';

class AddressValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(address: Address, location: string) {
    this.objectValidator.validate(address, location);
    this.stringValidator.validate(address.zipCode, `${location}.zipCode`);
    this.stringValidator.validate(address.address1, `${location}.address1`);
    this.stringValidator.validate(address.address2, `${location}.address2`);
    // if (address.region !== undefined) {
    //   this.stringValidator.validate(address.region, `${location}.region`);
    // }
    // this.stringValidator.validate(address.country, `${location}.country`);
  }
}

export class CreateDeliveryAddressValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private addressValidator: AddressValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.addressValidator = new AddressValidator();
  }

  public validate(body: CreateDeliveryAddressDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.name, `${location}.name`);
    this.stringValidator.validate(
      body.recipientName,
      `${location}.recipientName`
    );
    this.stringValidator.validate(
      body.mainPhoneNumber,
      `${location}.mainPhoneNumber`
    );
    this.addressValidator.validate(body.address, `${location}.address`);

    if (body.subPhoneNumber !== undefined) {
      this.stringValidator.validate(
        body.subPhoneNumber,
        `${location}.subPhoneNumber`
      );
    }
  }
}
