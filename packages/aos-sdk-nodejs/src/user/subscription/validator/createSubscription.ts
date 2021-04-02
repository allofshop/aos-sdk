import {
  BooleanValidator,
  DateValidator,
  NumberValidator,
  ObjectValidator,
  StringValidator,
} from '~/base/validator';

import { CreateSubscriptionDto } from '../type';
import { Orderer } from '../type/createSubscription/_orderer';
import { Period } from '../type/createSubscription/_period';
import { Plan } from '../type/createSubscription/_plan';
import { Schedule } from '../type/createSubscription/_schedule';
import { SubscriptionPeriodUnitValidator } from './_common';

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
    this.stringValidator.validate(orderer.user, `${location}.user`);

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

class PlanValidator {
  private objectValidator: ObjectValidator;
  private numberValidator: NumberValidator;
  private periodValidator: PeriodValidator;
  private booleanValidator: BooleanValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.numberValidator = new NumberValidator();
    this.periodValidator = new PeriodValidator();
    this.booleanValidator = new BooleanValidator();
  }

  public validate(plan: Plan, location: string) {
    this.objectValidator.validate(plan, location);
    this.periodValidator.validate(plan.period, `${location}.period`);
    this.booleanValidator.validate(plan.prepaid, `${location}.prepaid`);

    if (plan.iterationCount !== undefined) {
      this.numberValidator.validate(
        plan.iterationCount,
        `${location}.iterationCount`
      );
    }
  }
}

class PeriodValidator {
  private objectValidator: ObjectValidator;
  private numberValidator: NumberValidator;
  private subscriptionPeriodUnitValidator: SubscriptionPeriodUnitValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.numberValidator = new NumberValidator();
    this.subscriptionPeriodUnitValidator = new SubscriptionPeriodUnitValidator();
  }

  public validate(period: Period, location: string) {
    this.objectValidator.validate(period, location);
    this.subscriptionPeriodUnitValidator.validate(
      period.unit,
      `${location}.unit`
    );
    this.numberValidator.validate(period.value, `${location}.vallue`);
  }
}

class ScheduleValidator {
  private objectValidator: ObjectValidator;
  private dateValidator: DateValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.dateValidator = new DateValidator();
  }

  public validate(schedule: Schedule, location: string) {
    this.objectValidator.validate(schedule, location);
    this.dateValidator.validate(schedule.previousAt, `${location}.previousAt`);
    this.dateValidator.validate(schedule.nextAt, `${location}.nextAt`);
    this.dateValidator.validate(
      schedule.estimatedNextAt,
      `${location}.estimatedNextAt`
    );
  }
}

export class CreateSubscriptionValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private ordererValidator: OrdererValidator;
  private planValidator: PlanValidator;
  private scheduleValidator: ScheduleValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.ordererValidator = new OrdererValidator();
    this.planValidator = new PlanValidator();
    this.scheduleValidator = new ScheduleValidator();
  }

  public validate(body: CreateSubscriptionDto, location: string) {
    this.objectValidator.validate(body, location);
    this.ordererValidator.validate(body.orderer, `${location}.orderer`);
    this.planValidator.validate(body.plan, `${location}.plan`);
    this.stringValidator.validate(body.product, `${location}.product`);
    this.scheduleValidator.validate(body.schedule, `${location}.schedule`);

    if (body.productVariant !== undefined) {
      this.stringValidator.validate(
        body.productVariant,
        `${location}.productVariant`
      );
    }
  }
}
