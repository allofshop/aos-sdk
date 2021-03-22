import {
  DateValidator,
  GenderValidator,
  ObjectValidator,
  StringValidator,
} from '~/base/validator';

import { UpdateUserDto } from '../type';
import { Name } from '../type/updateUser/_name';
import { Phone } from '../type/updateUser/_phone';

class NameValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(name: Name, location: string) {
    this.objectValidator.validate(name, location);
    this.stringValidator.validate(name.first, `${location}.first`);
    if (name.middle !== undefined) {
      this.stringValidator.validate(name.middle, `${location}.middle`);
    }
    this.stringValidator.validate(name.first, `${location}.last`);
  }
}

class PhoneValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(phone: Phone, location: string) {
    this.objectValidator.validate(phone, location);
    this.stringValidator.validate(phone.number, `${location}.number`);
  }
}

export class UpdateUserValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private dateValidator: DateValidator;
  private genderValidator: GenderValidator;
  private nameValidator: NameValidator;
  private phoneValidator: PhoneValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.dateValidator = new DateValidator();
    this.genderValidator = new GenderValidator();
    this.nameValidator = new NameValidator();
    this.phoneValidator = new PhoneValidator();
  }

  public validate(body: UpdateUserDto, location: string) {
    this.objectValidator.validate(body, location);

    if (body.birthdate !== undefined) {
      this.dateValidator.validate(body.birthdate, `${location}.birthdate`);
    }

    if (body.gender !== undefined) {
      this.genderValidator.validate(body.gender, `${location}.gender`);
    }

    if (body.name !== undefined) {
      this.nameValidator.validate(body.name, `${location}.name`);
    }

    if (body.nickname !== undefined) {
      this.stringValidator.validate(body.nickname, `${location}.nickname`);
    }

    if (body.phone !== undefined) {
      this.phoneValidator.validate(body.phone, `${location}.phone`);
    }

    if (body.avatar !== undefined) {
      this.stringValidator.validate(body.avatar, `${location}.avatar`);
    }
  }
}
