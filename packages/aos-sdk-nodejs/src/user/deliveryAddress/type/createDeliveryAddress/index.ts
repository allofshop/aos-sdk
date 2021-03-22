import { Address } from './_address';

export type CreateDeliveryAddressDto = {
  name: string;
  recipientName: string;
  address: Address;
  mobilePhone: string;
  homePhone?: string;
};
