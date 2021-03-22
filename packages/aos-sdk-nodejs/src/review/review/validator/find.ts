import {
  BooleanValidator,
  DateQueryValidator,
  NumberQueryValidator,
  ObjectValidator,
  SortQueryValidator,
  StringValidator,
} from '~/base/validator';

import { FindDto } from '../type';

export class FindValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private numberQueryValidator: NumberQueryValidator;
  private booleanValidator: BooleanValidator;
  private dateQueryValidator: DateQueryValidator;
  private sortQueryValidator: SortQueryValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.numberQueryValidator = new NumberQueryValidator();
    this.booleanValidator = new BooleanValidator();
    this.dateQueryValidator = new DateQueryValidator();
    this.sortQueryValidator = new SortQueryValidator();
  }

  public validate(query: FindDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.score !== undefined) {
      this.numberQueryValidator.validate(query.score, `${location}.score`);
    }

    if (query.hasImage !== undefined) {
      this.booleanValidator.validate(query.hasImage, `${location}.hasImage`);
    }

    if (query.productId !== undefined) {
      this.stringValidator.validate(query.productId, `${location}.productId`);
    }

    if (query.productVariantId !== undefined) {
      this.stringValidator.validate(
        query.productVariantId,
        `${location}.productVariantId`
      );
    }

    if (query.createdAt !== undefined) {
      this.dateQueryValidator.validate(
        query.createdAt,
        `${location}.createdAt`
      );
    }

    if (query.content !== undefined) {
      this.stringValidator.validate(query.content, `${location}.content`);
    }

    if (query.sort !== undefined) {
      this.sortQueryValidator.validate(query.sort, `${location}.sort`);
    }
  }
}
