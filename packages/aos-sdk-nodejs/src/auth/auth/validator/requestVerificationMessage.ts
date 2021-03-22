import { ValueShouldBeEnum } from '~/base/error';
import { ObjectValidator, StringValidator } from '~/base/validator';

import { RequestVerificationMessageDto } from '../type';
import { RequestVerificationMessageType } from '../vo';

class RequestVerificationMessageTypeValidator {
  public validate(type: RequestVerificationMessageType, location: string) {
    if (
      type !== RequestVerificationMessageType.EMAIL &&
      type !== RequestVerificationMessageType.PHONE
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

export class RequestVerificationMessageValidator {
  private stringValidator: StringValidator;
  private objectValidator: ObjectValidator;
  private requestVerificationMessageValidator: RequestVerificationMessageTypeValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.objectValidator = new ObjectValidator();
    this.requestVerificationMessageValidator = new RequestVerificationMessageTypeValidator();
  }

  public validate(body: RequestVerificationMessageDto, location: string) {
    this.objectValidator.validate(body, location);
    this.requestVerificationMessageValidator.validate(
      body.type,
      `${location}.type`
    );
    this.stringValidator.validate(body.value, `${location}.value`);
  }
}
