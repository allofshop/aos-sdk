import { Address } from './_address';

export type CreateDeliveryAddressDto = {
  name: string;
  recipientName: string;
  address: Address;
  mainPhoneNumber: string;
  subPhoneNumber?: string;
};
