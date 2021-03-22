import {
  BooleanValidator,
  DateQueryValidator,
  NumberQueryValidator,
  ObjectValidator,
  SortQueryValidator,
  StringArrayValidator,
} from '~/base/validator';

import { FindDto } from '../type';

export class FindValidator {
  private booleanValidator: BooleanValidator;
  private stringArrayValidator: StringArrayValidator;
  private objectValidator: ObjectValidator;
  private dateQueryValidator: DateQueryValidator;
  private numberQueryValidator: NumberQueryValidator;
  private sortQueryValidator: SortQueryValidator;

  constructor() {
    this.booleanValidator = new BooleanValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.objectValidator = new ObjectValidator();
    this.dateQueryValidator = new DateQueryValidator();
    this.numberQueryValidator = new NumberQueryValidator();
    this.sortQueryValidator = new SortQueryValidator();
  }

  public validate(query: FindDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.vendorIds !== undefined) {
      this.stringArrayValidator.validate(
        query.vendorIds,
        `${location}.vendorIds`
      );
    }

    if (query.ids !== undefined) {
      this.stringArrayValidator.validate(query.ids, `${location}.ids`);
    }

    if (query.displayable !== undefined) {
      this.booleanValidator.validate(
        query.displayable,
        `${location}.displayable`
      );
    }

    if (query.sellable !== undefined) {
      this.booleanValidator.validate(query.sellable, `${location}.sellable`);
    }

    if (query.names !== undefined) {
      this.stringArrayValidator.validate(query.names, `${location}.names`);
    }

    if (query.codes !== undefined) {
      this.stringArrayValidator.validate(query.codes, `${location}.codes`);
    }

    if (query.customCodes !== undefined) {
      this.stringArrayValidator.validate(
        query.customCodes,
        `${location}.customCodes`
      );
    }

    if (query.brandCodes !== undefined) {
      this.stringArrayValidator.validate(
        query.brandCodes,
        `${location}.brandCodes`
      );
    }

    if (query.manufactureCodes !== undefined) {
      this.stringArrayValidator.validate(
        query.manufactureCodes,
        `${location}.manufactureCodes`
      );
    }

    if (query.supplierCodes !== undefined) {
      this.stringArrayValidator.validate(
        query.supplierCodes,
        `${location}.supplierCodes`
      );
    }

    if (query.tags !== undefined) {
      this.stringArrayValidator.validate(query.tags, `${location}.tags`);
    }

    if (query.price !== undefined) {
      this.numberQueryValidator.validate(query.price, `${location}.price`);
    }

    if (query.retailPrice !== undefined) {
      this.numberQueryValidator.validate(
        query.retailPrice,
        `${location}.retailPrice`
      );
    }

    if (query.grossPrice !== undefined) {
      this.numberQueryValidator.validate(
        query.grossPrice,
        `${location}.grossPrice`
      );
    }

    if (query.createdAt !== undefined) {
      this.dateQueryValidator.validate(
        query.createdAt,
        `${location}.createdAt`
      );
    }

    if (query.updatedAt !== undefined) {
      this.dateQueryValidator.validate(
        query.updatedAt,
        `${location}.updatedAt`
      );
    }

    if (query.categoryIds !== undefined) {
      this.stringArrayValidator.validate(
        query.categoryIds,
        `${location}.categoryIds`
      );
    }

    if (query.includeSubCategory !== undefined) {
      this.booleanValidator.validate(
        query.includeSubCategory,
        `${location}.includeSubCategory`
      );
    }

    if (query.stock !== undefined) {
      this.numberQueryValidator.validate(query.stock, `${location}.stock`);
    }

    if (query.safetyStock !== undefined) {
      this.numberQueryValidator.validate(
        query.safetyStock,
        `${location}.safetyStock`
      );
    }

    if (query.weight !== undefined) {
      this.numberQueryValidator.validate(query.weight, `${location}.weight`);
    }

    if (query.sort !== undefined) {
      this.sortQueryValidator.validate(query.sort, `${location}.sort`);
    }
  }
}
