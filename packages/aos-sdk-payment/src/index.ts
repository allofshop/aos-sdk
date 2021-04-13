/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */

import Client from './AosPaymentSdk';

const AosPaymentSdk = new Client();
if (typeof window === 'undefined') {
  (window as any) = {};
  (global as any).window = {};
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).AosPaymentSdk = AosPaymentSdk;

export default Client;
