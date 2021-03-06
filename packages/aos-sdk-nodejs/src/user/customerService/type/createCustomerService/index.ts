import { CustomerServicePaymentWay, CustomerServiceType } from '../../vo';
import { Collecting } from './_collecting';
import { Delivery } from './_delivery';
import { Destination } from './_destination';
import { Source } from './_source';

export type CreateCustomerServiceDto = {
  orderId: string;
  type: CustomerServiceType;
  reason?: string;
  reasonDetail?: string;
  sources: Source[];
  destinations: Destination[];
  paymentWay?: CustomerServicePaymentWay;
  collecting?: Collecting;
  delivery?: Delivery;
};
