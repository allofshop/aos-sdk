import {
  GenderValidator,
  ObjectValidator,
  StringValidator,
} from '~/base/validator';

import { JoinDto } from '../type';
import { Name } from '../type/join/_name';

class NameValidator {
  private stringValidator: StringValidator;
  private objectValidator: ObjectValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.objectValidator = new ObjectValidator();
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

export class JoinValidator {
  private stringValidator: StringValidator;
  private objectValidator: ObjectValidator;
  private nameValidator: NameValidator;
  private genderValidator: GenderValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.objectValidator = new ObjectValidator();
    this.nameValidator = new NameValidator();
    this.genderValidator = new GenderValidator();
  }

  public validate(body: JoinDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.username, `${location}.username`);
    this.stringValidator.validate(body.password, `${location}.password`);

    if (body.gender !== undefined) {
      this.genderValidator.validate(body.gender, `${location}.gender`);
    }

    this.nameValidator.validate(body.name, `${location}.name`);
  }
}
