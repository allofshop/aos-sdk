/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */

export interface InitOption {
  shopId: string;
  orderId: string;
  accessToken: string;
  pgProvider: string;
  apiHost: string;
  wrapperId?: string;
}
