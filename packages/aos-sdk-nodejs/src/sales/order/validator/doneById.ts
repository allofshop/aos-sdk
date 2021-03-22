import { ValueShouldBeEnum } from '~/base/error';
import {
  NumberValidator,
  ObjectValidator,
  StringValidator,
} from '~/base/validator';

import { DoneByIdDto } from '../type';
import { PayMethod } from '../vo';

class PayMethodValidator {
  public validate(payMethod: PayMethod, location: string) {
    if (
      payMethod !== PayMethod.BANK &&
      payMethod !== PayMethod.CARD &&
      payMethod !== PayMethod.CELLPHONE &&
      payMethod !== PayMethod.VBANK
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

export class DoneByIdValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private payMethodValidator: PayMethodValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.payMethodValidator = new PayMethodValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(body: DoneByIdDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.resultCode, `${location}.resultCode`);
    this.stringValidator.validate(
      body.resultMessage,
      `${location}.resultMessage`
    );
    this.stringValidator.validate(
      body.authenticationToken,
      `${location}.authenticationToken`
    );
    this.payMethodValidator.validate(body.payMethod, `${location}.payMethod`);
    this.stringValidator.validate(body.merchantId, `${location}.merchantId`);
    this.stringValidator.validate(
      body.merchantOrderId,
      `${location}.merchantOrderId`
    );
    this.numberValidator.validate(
      body.paymentPrice,
      `${location}.paymentPrice`
    );
    this.stringValidator.validate(body.reserved, `${location}.reserved`);
    this.stringValidator.validate(
      body.transactionId,
      `${location}.transactionId`
    );
    this.stringValidator.validate(body.nextAppUrl, `${location}.nextAppUrl`);
    this.stringValidator.validate(
      body.netCancelUrl,
      `${location}.netCancelUrl`
    );
  }
}
