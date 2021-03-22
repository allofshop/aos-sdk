import { ValueShouldBeArray } from '~/base/error';
import {
  NumberValidator,
  ObjectValidator,
  StringValidator,
} from '~/base/validator';

import { CreateCustomerServiceDto } from '../type';
import { Collecting } from '../type/createCustomerService/_collecting';
import { CollectingAddress } from '../type/createCustomerService/_collectingAddress';
import { Delivery } from '../type/createCustomerService/_delivery';
import { DeliveryAddress } from '../type/createCustomerService/_deliveryAddress';
import { Destination } from '../type/createCustomerService/_destination';
import { ExtraCharge } from '../type/createCustomerService/_extraCharge';
import { Refund } from '../type/createCustomerService/_refund';
import { Source } from '../type/createCustomerService/_source';
import {
  CustomerServicePaymentWayValidator,
  CustomerServiceTypeValidator,
} from './_common';

class SourceArrayValidator {
  private stringValidator: StringValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(sources: Source[], location: string) {
    if (typeof sources !== 'object' || sources.length === undefined) {
      throw new ValueShouldBeArray(location);
    }

    sources.map((source) => {
      this.stringValidator.validate(
        source.orderItemId,
        `${location}.orderItemId`
      );
      this.numberValidator.validate(source.quantity, `${location}.quantity`);
    });
  }
}

class DestinationArrayValidator {
  private stringValidator: StringValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.stringValidator = new StringValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(destinations: Destination[], location: string) {
    if (typeof destinations !== 'object' || destinations.length === undefined) {
      throw new ValueShouldBeArray(location);
    }

    destinations.map((destination) => {
      this.stringValidator.validate(
        destination.productId,
        `${location}.productId`
      );
      this.numberValidator.validate(
        destination.quantity,
        `${location}.quantity`
      );

      if (destination.productVariantId !== undefined) {
        this.stringValidator.validate(
          destination.productVariantId,
          `${location}.productVariantId`
        );
      }

      if (destination.discountPrice !== undefined) {
        this.numberValidator.validate(
          destination.discountPrice,
          `${location}.discountPrice`
        );
      }

      if (destination.mileagePoint !== undefined) {
        this.numberValidator.validate(
          destination.mileagePoint,
          `${location}.mileagePoint`
        );
      }
    });
  }
}

class CollectinValidator {
  private objectValidator: ObjectValidator;
  private collectingAddressValidator: CollectingAddressValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.collectingAddressValidator = new CollectingAddressValidator();
  }

  public validate(collecting: Collecting, location: string) {
    this.objectValidator.validate(collecting, location);
    this.collectingAddressValidator.validate(
      collecting.address,
      `${location}.address`
    );
  }
}

class CollectingAddressValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(address: CollectingAddress, location: string) {
    this.objectValidator.validate(address, location);
    this.stringValidator.validate(address.zipCode, `${location}.zipCode`);
    this.stringValidator.validate(address.basic, `${location}.basic`);
    this.stringValidator.validate(address.locality, `${location}.locality`);

    if (address.region !== undefined) {
      this.stringValidator.validate(address.region, `${location}.region`);
    }
  }
}

class DeliveryValidator {
  private objectValidator: ObjectValidator;
  private deliveryAddressValidator: DeliveryAddressValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.deliveryAddressValidator = new DeliveryAddressValidator();
  }

  public validate(delivery: Delivery, location: string) {
    this.objectValidator.validate(delivery, location);
    this.deliveryAddressValidator.validate(
      delivery.address,
      `${location}.address`
    );
  }
}

class DeliveryAddressValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(address: DeliveryAddress, location: string) {
    this.objectValidator.validate(address, location);
    this.stringValidator.validate(address.zipCode, `${location}.zipCode`);
    this.stringValidator.validate(address.basic, `${location}.basic`);
    this.stringValidator.validate(address.locality, `${location}.locality`);

    if (address.region !== undefined) {
      this.stringValidator.validate(address.region, `${location}.region`);
    }
  }
}

class RefundValidator {
  private objectValidator: ObjectValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(refund: Refund, location: string) {
    this.objectValidator.validate(refund, location);
    this.numberValidator.validate(
      refund.productPrice,
      `${location}.productPrice`
    );
    this.numberValidator.validate(
      refund.deliveryPrice,
      `${location}.deliveryPrice`
    );
    this.numberValidator.validate(
      refund.usingMileagePoint,
      `${location}.usingMileagePoint`
    );
    this.numberValidator.validate(
      refund.discountPrice,
      `${location}.discountPrice`
    );
    this.numberValidator.validate(
      refund.couponPrice,
      `${location}.couponPrice`
    );
    this.numberValidator.validate(
      refund.mileagePoint,
      `${location}.mileagePoint`
    );
  }
}

class ExtraChargeValidator {
  private objectValidator: ObjectValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(extraCharge: ExtraCharge, location: string) {
    this.objectValidator.validate(extraCharge, location);
    this.numberValidator.validate(
      extraCharge.productPrice,
      `${location}.productPrice`
    );
    this.numberValidator.validate(
      extraCharge.deliveryPrice,
      `${location}.deliveryPrice`
    );
    this.numberValidator.validate(
      extraCharge.usingMileagePoint,
      `${location}.usingMileagePoint`
    );
    this.numberValidator.validate(
      extraCharge.discountPrice,
      `${location}.discountPrice`
    );
    this.numberValidator.validate(
      extraCharge.couponPrice,
      `${location}.couponPrice`
    );
    this.numberValidator.validate(
      extraCharge.mileagePoint,
      `${location}.mileagePoint`
    );
  }
}

export class CreateCustomerServiceValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private customerServiceTypeValidator: CustomerServiceTypeValidator;
  private sourceArrayValidator: SourceArrayValidator;
  private destinationArrayValidator: DestinationArrayValidator;
  private customerServicePaymentWayValidator: CustomerServicePaymentWayValidator;
  private collectingValidator: CollectinValidator;
  private deliveryValidator: DeliveryValidator;
  private refundValidator: RefundValidator;
  private extraChargeValidator: ExtraChargeValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.customerServiceTypeValidator = new CustomerServiceTypeValidator();
    this.sourceArrayValidator = new SourceArrayValidator();
    this.destinationArrayValidator = new DestinationArrayValidator();
    this.customerServicePaymentWayValidator = new CustomerServicePaymentWayValidator();
    this.collectingValidator = new CollectinValidator();
    this.deliveryValidator = new DeliveryValidator();
    this.refundValidator = new RefundValidator();
    this.extraChargeValidator = new ExtraChargeValidator();
  }

  public validate(body: CreateCustomerServiceDto, location: string) {
    this.objectValidator.validate(body, location);
    this.stringValidator.validate(body.orderId, `${location}.orderId`);
    this.customerServiceTypeValidator.validate(body.type, `${location}.type`);
    this.sourceArrayValidator.validate(body.sources, `${location}.sources`);
    this.destinationArrayValidator.validate(
      body.destinations,
      `${location}.destinations`
    );
    this.refundValidator.validate(body.refund, `${location}.refund`);

    if (body.reason !== undefined) {
      this.stringValidator.validate(body.reason, `${location}.reason`);
    }

    if (body.reasonDetail !== undefined) {
      this.stringValidator.validate(
        body.reasonDetail,
        `${location}.reasonDetail`
      );
    }

    if (body.paymentWay !== undefined) {
      this.customerServicePaymentWayValidator.validate(
        body.paymentWay,
        `${location}.paymentWay`
      );
    }

    if (body.collecting !== undefined) {
      this.collectingValidator.validate(
        body.collecting,
        `${location}.collecting`
      );
    }

    if (body.delivery !== undefined) {
      this.deliveryValidator.validate(body.delivery, `${location}.delivery`);
    }

    if (body.extraCharge !== undefined) {
      this.extraChargeValidator.validate(
        body.extraCharge,
        `${location}.extraCharge`
      );
    }
  }
}
