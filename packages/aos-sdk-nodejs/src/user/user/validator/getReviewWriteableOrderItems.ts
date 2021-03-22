import { ObjectValidator, StringValidator } from '~/base/validator';

import { FindReviewWriteableOrderItemsDto } from '../type';

export class FindReviewWriteableOrderItemsValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(query: FindReviewWriteableOrderItemsDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.productName !== undefined) {
      this.stringValidator.validate(
        query.productName,
        `${location}.productName`
      );
    }
  }
}
