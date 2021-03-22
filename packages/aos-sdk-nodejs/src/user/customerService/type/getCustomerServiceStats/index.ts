import {
  CustomerServicePaymentWay,
  CustomerServiceStatus,
  CustomerServiceType,
} from '../../vo';

export type GetCustomerServiceStatsDto = {
  createdAt?: Date;
  orderCreatedAt?: Date;
  orderCode?: string;
  type?: CustomerServiceType;
  code?: string;
  status?: CustomerServiceStatus;
  completedAt?: Date;
  paymentWay?: CustomerServicePaymentWay;
};
