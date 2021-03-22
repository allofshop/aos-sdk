import { BooleanValidator, ObjectValidator } from '~/base/validator';

import { FindWishlistsDto } from '../type';

export class FindWishlistsValidator {
  private objectValidator: ObjectValidator;
  private booleanValidator: BooleanValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.booleanValidator = new BooleanValidator();
  }

  public validate(query: FindWishlistsDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.isDefault !== undefined) {
      this.booleanValidator.validate(query.isDefault, `${location}.isDefault`);
    }
  }
}
