import {
  DateQueryValidator,
  ObjectValidator,
  SortQueryValidator,
} from '~/base/validator';

import { FindSubscriptionsDto } from '../type';

export class FindSubscriptionsValidator {
  private objectValidator: ObjectValidator;
  private dateQueryValidator: DateQueryValidator;
  private sortQueryValidator: SortQueryValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.dateQueryValidator = new DateQueryValidator();
    this.sortQueryValidator = new SortQueryValidator();
  }

  public validate(query: FindSubscriptionsDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.createdAt !== undefined) {
      this.dateQueryValidator.validate(
        query.createdAt,
        `${location}.createdAt`
      );
    }

    if (query.previousAt !== undefined) {
      this.dateQueryValidator.validate(
        query.previousAt,
        `${location}.previousAt`
      );
    }

    if (query.nextAt !== undefined) {
      this.dateQueryValidator.validate(query.nextAt, `${location}.nextAt`);
    }

    if (query.estimatedNextAt !== undefined) {
      this.dateQueryValidator.validate(
        query.estimatedNextAt,
        `${location}.estimatedNextAt`
      );
    }

    if (query.sort !== undefined) {
      this.sortQueryValidator.validate(query.sort, `${location}.sort`);
    }
  }
}
