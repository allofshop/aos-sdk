/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */

import Client from './AosPaymentSdk';

const AosPaymentSdk = new Client();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((window as any) !== undefined) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).AosPaymentSdk = AosPaymentSdk;
}

export default Client;
