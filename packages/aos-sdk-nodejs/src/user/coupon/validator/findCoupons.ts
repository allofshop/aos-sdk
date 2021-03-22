import {
  DateQueryValidator,
  DateValidator,
  ObjectValidator,
  SortQueryValidator,
} from '~/base/validator';

import { FindCouponsDto } from '../type';

export class FindCouponsValidator {
  private objectValidator: ObjectValidator;
  private dateValidator: DateValidator;
  private dateQueryValidator: DateQueryValidator;
  private sortQueryValidator: SortQueryValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.dateValidator = new DateValidator();
    this.dateQueryValidator = new DateQueryValidator();
    this.sortQueryValidator = new SortQueryValidator();
  }

  public validate(query: FindCouponsDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.usedAt !== undefined) {
      this.dateQueryValidator.validate(query.usedAt, `${location}.usedAt`);
    }

    if (query.availableDate !== undefined) {
      this.dateValidator.validate(
        query.availableDate,
        `${location}.availableDate`
      );
    }

    if (query.sort !== undefined) {
      this.sortQueryValidator.validate(query.sort, `${location}.sort`);
    }
  }
}
