import { ValueShouldBeEnum } from '~/base/error';

import {
  CustomerServicePaymentWay,
  CustomerServiceStatus,
  CustomerServiceType,
} from '../vo';

export class CustomerServiceTypeValidator {
  public validate(type: CustomerServiceType, location: string) {
    if (
      type !== CustomerServiceType.CANCEL &&
      type !== CustomerServiceType.EXCHANGE &&
      type !== CustomerServiceType.REFUND &&
      type !== CustomerServiceType.RETURN
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

export class CustomerServicePaymentWayValidator {
  public validate(paymentWay: CustomerServicePaymentWay, location: string) {
    if (
      paymentWay !== CustomerServicePaymentWay.BANK &&
      paymentWay !== CustomerServicePaymentWay.MILEAGE &&
      paymentWay !== CustomerServicePaymentWay.PG
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

export class CustomerServiceStatusValidator {
  public validate(status: CustomerServiceStatus, location: string) {
    if (
      status !== CustomerServiceStatus.COMPLETED &&
      status !== CustomerServiceStatus.DEFERRED &&
      status !== CustomerServiceStatus.PROCESSING &&
      status !== CustomerServiceStatus.RECEIVED
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}
