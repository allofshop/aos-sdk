import { ValueShouldBeEnum } from '~/base/error';
import {
  NumberValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { CheckoutOneByIdDto } from '../type/checkoutOneById';
import { Address } from '../type/checkoutOneById/_address';
import { Orderer } from '../type/checkoutOneById/_orderer';
import {
  Payment,
  PaymentDeposit,
  PaymentDepositCashReceipt,
} from '../type/checkoutOneById/_payment';
import { Recipient } from '../type/checkoutOneById/_recipient';
import { PaymentType, ReceiptType } from '../vo';

class OrdererValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(orderer: Orderer, location: string) {
    this.objectValidator.validate(orderer, location);
    this.stringValidator.validate(orderer.name, `${location}.name`);

    if (orderer.subPhoneNumber !== undefined) {
      this.stringValidator.validate(
        orderer.subPhoneNumber,
        `${location}.subPhoneNumber`
      );
    }

    if (orderer.mainPhoneNumber !== undefined) {
      this.stringValidator.validate(
        orderer.mainPhoneNumber,
        `${location}.mainPhoneNumber`
      );
    }

    if (orderer.email !== undefined) {
      this.stringValidator.validate(orderer.email, `${location}.email`);
    }

    if (orderer.password !== undefined) {
      this.stringValidator.validate(orderer.password, `${location}.password`);
    }
  }
}

class RecipientValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(recipient: Recipient, location: string) {
    this.objectValidator.validate(recipient, location);
    this.stringValidator.validate(recipient.name, `${location}.name`);

    if (recipient.subPhoneNumber !== undefined) {
      this.stringValidator.validate(
        recipient.subPhoneNumber,
        `${location}.subPhoneNumber`
      );
    }

    if (recipient.mainPhoneNumber !== undefined) {
      this.stringValidator.validate(
        recipient.mainPhoneNumber,
        `${location}.mainPhoneNumber`
      );
    }
  }
}

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
  }
}

class PaymentTypeValidator {
  public validate(type: PaymentType, location: string) {
    if (
      type !== PaymentType.DEPOSIT &&
      type !== PaymentType.PG_CARD &&
      type !== PaymentType.PG_DEPOSIT &&
      type !== PaymentType.PG_VBANK
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

class ReceiptTypeValidator {
  public validate(type: ReceiptType, location: string) {
    if (
      type !== ReceiptType.INCOME_DEDUCTION &&
      type !== ReceiptType.PROOF_OF_EXPENDITURE
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

class PaymentDepositCashReceiptValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private receiptTypeValidator: ReceiptTypeValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.receiptTypeValidator = new ReceiptTypeValidator();
  }

  public validate(cashReceipt: PaymentDepositCashReceipt, location: string) {
    this.objectValidator.validate(cashReceipt, location);
    this.receiptTypeValidator.validate(cashReceipt.type, `${location}.type`);
    this.stringValidator.validate(cashReceipt.value, `${location}.value`);
  }
}

class PaymentDepositValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private cashReceiptValidator: PaymentDepositCashReceiptValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.cashReceiptValidator = new PaymentDepositCashReceiptValidator();
  }

  public validate(deposit: PaymentDeposit, location: string) {
    this.objectValidator.validate(deposit, location);
    this.stringValidator.validate(deposit.depositor, `${location}.depositor`);
    this.stringValidator.validate(
      deposit.wireTransferId,
      `${location}.wireTransferId`
    );

    if (deposit.cashReceipt !== undefined) {
      this.cashReceiptValidator.validate(
        deposit.cashReceipt,
        `${location}.cashReceipt`
      );
    }
  }
}
class PaymentValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private paymentTypeValidator: PaymentTypeValidator;
  private paymentDepositValidator: PaymentDepositValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.paymentTypeValidator = new PaymentTypeValidator();
    this.paymentDepositValidator = new PaymentDepositValidator();
  }

  public validate(payment: Payment, location: string) {
    this.objectValidator.validate(payment, location);
    this.paymentTypeValidator.validate(payment.type, `${location}.type`);

    if (payment.deposit !== undefined) {
      this.paymentDepositValidator.validate(
        payment.deposit,
        `${location}.deposit`
      );
    }

    if (payment.pgId !== undefined) {
      this.stringValidator.validate(payment.pgId, `${location}.pgId`);
    }
  }
}

export class CheckoutOneByIdValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private stringArrayValidator: StringArrayValidator;
  private numberValidator: NumberValidator;
  private ordererValidator: OrdererValidator;
  private recipientValidator: RecipientValidator;
  private addressValidator: AddressValidator;
  private paymentValidator: PaymentValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.numberValidator = new NumberValidator();
    this.ordererValidator = new OrdererValidator();
    this.recipientValidator = new RecipientValidator();
    this.addressValidator = new AddressValidator();
    this.paymentValidator = new PaymentValidator();
  }

  public validate(body: CheckoutOneByIdDto, location: string) {
    this.objectValidator.validate(body, location);
    this.ordererValidator.validate(body.orderer, `${location}.orderer`);
    this.recipientValidator.validate(body.recipient, `${location}.recipient`);
    this.addressValidator.validate(body.address, `${location}.address`);
    this.paymentValidator.validate(body.payment, `${location}.payment`);

    if (body.productName !== undefined) {
      this.stringValidator.validate(
        body.productName,
        `${location}.productName`
      );
    }

    if (body.couponIds !== undefined) {
      this.stringArrayValidator.validate(
        body.couponIds,
        `${location}.couponIds`
      );
    }

    if (body.usingMileage !== undefined) {
      this.numberValidator.validate(
        body.usingMileage,
        `${location}.usingMileage`
      );
    }
  }
}
