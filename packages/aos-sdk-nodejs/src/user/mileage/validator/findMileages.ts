import {
  BooleanValidator,
  DateQueryValidator,
  ObjectValidator,
  SortQueryValidator,
} from '~/base/validator';

import { FindMileagesDto } from '../type';

export class FindMileagesValidator {
  private objectValidator: ObjectValidator;
  private booleanValidator: BooleanValidator;
  private dateQueryValidator: DateQueryValidator;
  private sortQueryValidator: SortQueryValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.booleanValidator = new BooleanValidator();
    this.dateQueryValidator = new DateQueryValidator();
    this.sortQueryValidator = new SortQueryValidator();
  }

  public validate(query: FindMileagesDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.available !== undefined) {
      this.booleanValidator.validate(query.available, `${location}.available`);
    }

    if (query.expiredAt !== undefined) {
      this.dateQueryValidator.validate(
        query.expiredAt,
        `${location}.expiredAt`
      );
    }

    if (query.createdAt !== undefined) {
      this.dateQueryValidator.validate(
        query.createdAt,
        `${location}.createdAt`
      );
    }

    if (query.sort !== undefined) {
      this.sortQueryValidator.validate(query.sort, `${location}.sort`);
    }
  }
}
