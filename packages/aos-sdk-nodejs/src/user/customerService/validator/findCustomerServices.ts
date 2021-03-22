import {
  DateValidator,
  ObjectValidator,
  SortQueryValidator,
  StringValidator,
} from '~/base/validator';

import { FindCustomerServicesDto } from '../type';
import {
  CustomerServicePaymentWayValidator,
  CustomerServiceStatusValidator,
  CustomerServiceTypeValidator,
} from './_common';

export class FindCustomerServicesValidator {
  private objectValidator: ObjectValidator;
  private dataValidator: DateValidator;
  private stringValidator: StringValidator;
  private typeValidator: CustomerServiceTypeValidator;
  private statusValidator: CustomerServiceStatusValidator;
  private paymentWayValidator: CustomerServicePaymentWayValidator;
  private sortQueryValidator: SortQueryValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.dataValidator = new DateValidator();
    this.stringValidator = new StringValidator();
    this.typeValidator = new CustomerServiceTypeValidator();
    this.statusValidator = new CustomerServiceStatusValidator();
    this.paymentWayValidator = new CustomerServicePaymentWayValidator();
    this.sortQueryValidator = new SortQueryValidator();
  }

  public validate(query: FindCustomerServicesDto, location: string) {
    this.objectValidator.validate(query, location);

    if (query.createdAt !== undefined) {
      this.dataValidator.validate(query.createdAt, `${location}.createdAt`);
    }

    if (query.orderCreatedAt !== undefined) {
      this.dataValidator.validate(
        query.orderCreatedAt,
        `${location}.orderCreatedAt`
      );
    }

    if (query.orderCode !== undefined) {
      this.stringValidator.validate(query.orderCode, `${location}.orderCode`);
    }

    if (query.type !== undefined) {
      this.typeValidator.validate(query.type, `${location}.type`);
    }

    if (query.code !== undefined) {
      this.stringValidator.validate(query.code, `${location}.code`);
    }

    if (query.status !== undefined) {
      this.statusValidator.validate(query.status, `${location}.status`);
    }

    if (query.completedAt !== undefined) {
      this.dataValidator.validate(query.completedAt, `${location}.completedAt`);
    }

    if (query.paymentWay !== undefined) {
      this.paymentWayValidator.validate(
        query.paymentWay,
        `${location}.paymentWay`
      );
    }

    if (query.sort !== undefined) {
      this.sortQueryValidator.validate(query.sort, `${location}.sort`);
    }
  }
}
