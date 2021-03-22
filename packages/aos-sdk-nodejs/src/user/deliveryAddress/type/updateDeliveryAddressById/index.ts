import { Address } from './_address';

export type UpdateDeliveryAddressByIdDto = {
  isDefault?: boolean;
  name?: string;
  recipientName?: string;
  address?: Address;
  mobilePhone?: string;
  homePhone?: string;
};
