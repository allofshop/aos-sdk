import { ValueShouldBeEnum } from '~/base/error';
import {
  DateQueryValidator,
  ObjectValidator,
  SortQueryValidator,
} from '~/base/validator';

import { FindOrdersDto } from '../type';
import { OrderStatus } from '../vo';

class OrderStatusValidator {
  public validate(status: OrderStatus, location: string) {
    if (
      status !== OrderStatus.AWAITING_DEPOSIT &&
      status !== OrderStatus.COMPLETED &&
      status !== OrderStatus.CONFIRMED &&
      status !== OrderStatus.CS_PROCESSING &&
      status !== OrderStatus.DRAFT &&
      status !== OrderStatus.EXPIRED &&
      status !== OrderStatus.ORDER_PROCESSING &&
      status !== OrderStatus.PAYMENT_PROCESSING
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

export class FindOrdersValidator {
  private objectValidator: ObjectValidator;
  private dateQueryValidator: DateQueryValidator;
  private sortQueryValidator: SortQueryValidator;
  private statusValidator: OrderStatusValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.dateQueryValidator = new DateQueryValidator();
    this.sortQueryValidator = new SortQueryValidator();
    this.statusValidator = new OrderStatusValidator();
  }

  public validate(query: FindOrdersDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.createdAt !== undefined) {
      this.dateQueryValidator.validate(
        query.createdAt,
        `${location}.createdAt`
      );
    }

    if (query.status !== undefined) {
      this.statusValidator.validate(query.status, `${location}.status`);
    }

    if (query.sort !== undefined) {
      this.sortQueryValidator.validate(query.sort, `${location}.sort`);
    }
  }
}
