/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */

import { PayResponseErrorCallback, PayResponseSuccessCallback } from '../types';

interface Display {
  cardQuota: number[];
}

interface Orderer {
  name: string;
  homePhone?: string;
  mobilePhone?: string;
  email?: string;
  password?: string;
}

interface Recipient {
  name: string;
  homePhone?: string;
  mobilePhone?: string;
}

interface Address {
  zipCode: string;
  basic: string;
  locality: string;
  region?: string;
}

interface PaymentDeposit {
  wireTransferId: string;
  depositor: string;
}

interface Payment {
  type: string;
  deposit?: PaymentDeposit;
  pgId?: string;
}

export interface PayParameterPayload {
  /** new */
  orderId?: string;
  productName?: string;
  orderer?: Orderer;
  recipient?: Recipient;
  couponIds?: string[];
  usingMileage?: number;
  address?: Address;
  payment?: Payment;
}

export interface PayParameter {
  payload: PayParameterPayload;

  onSuccess?: PayResponseSuccessCallback;
  onError?: PayResponseErrorCallback;
}
