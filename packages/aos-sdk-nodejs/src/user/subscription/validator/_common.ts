import { ValueShouldBeEnum } from '~/base/error';

import { SubscriptionPeriodUnit } from '../vo';

export class SubscriptionPeriodUnitValidator {
  public validate(unit: SubscriptionPeriodUnit, location: string) {
    if (
      unit !== SubscriptionPeriodUnit.DAILY &&
      unit !== SubscriptionPeriodUnit.MONTHLY &&
      unit !== SubscriptionPeriodUnit.WEEKLY &&
      unit !== SubscriptionPeriodUnit.YEARLY
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}
