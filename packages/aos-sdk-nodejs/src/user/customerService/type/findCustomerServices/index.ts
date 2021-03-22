import {
  CustomerServicePaymentWay,
  CustomerServiceStatus,
  CustomerServiceType,
} from '../../vo';
import { CustomerServiceSort } from './_sort';

export type FindCustomerServicesDto = {
  createdAt?: Date;
  orderCreatedAt?: Date;
  orderCode?: string;
  type?: CustomerServiceType;
  code?: string;
  status?: CustomerServiceStatus;
  completedAt?: Date;
  paymentWay?: CustomerServicePaymentWay;
  sort?: CustomerServiceSort;
};
