import {
  BooleanValidator,
  DateValidator,
  NumberValidator,
  ObjectValidator,
  StringValidator,
} from '~/base/validator';

import { UpdateSubscriptionByIdDto } from '../type';
import { Orderer } from '../type/updateSubscriptionById/_orderer';
import { Period } from '../type/updateSubscriptionById/_period';
import { Plan } from '../type/updateSubscriptionById/_plan';
import { Schedule } from '../type/updateSubscriptionById/_schedule';
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

    if (orderer.name !== undefined) {
      this.stringValidator.validate(orderer.name, `${location}.name`);
    }

    if (orderer.user !== undefined) {
      this.stringValidator.validate(orderer.user, `${location}.user`);
    }

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

    if (plan.period !== undefined) {
      this.periodValidator.validate(plan.period, `${location}.period`);
    }

    if (plan.prepaid !== undefined) {
      this.booleanValidator.validate(plan.prepaid, `${location}.prepaid`);
    }

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

    if (period.unit !== undefined) {
      this.subscriptionPeriodUnitValidator.validate(
        period.unit,
        `${location}.unit`
      );
    }

    if (period.value !== undefined) {
      this.numberValidator.validate(period.value, `${location}.vallue`);
    }
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

    if (schedule.previousAt !== undefined) {
      this.dateValidator.validate(
        schedule.previousAt,
        `${location}.previousAt`
      );
    }

    if (schedule.nextAt !== undefined) {
      this.dateValidator.validate(schedule.nextAt, `${location}.nextAt`);
    }

    if (schedule.estimatedNextAt !== undefined) {
      this.dateValidator.validate(
        schedule.estimatedNextAt,
        `${location}.estimatedNextAt`
      );
    }
  }
}

export class UpdateSubscriptionByIdValidator {
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

  public validate(body: UpdateSubscriptionByIdDto, location: string) {
    this.objectValidator.validate(body, location);

    if (body.orderer !== undefined) {
      this.ordererValidator.validate(body.orderer, `${location}.orderer`);
    }

    if (body.plan !== undefined) {
      this.planValidator.validate(body.plan, `${location}.plan`);
    }

    if (body.schedule !== undefined) {
      this.scheduleValidator.validate(body.schedule, `${location}.schedule`);
    }
  }
}
