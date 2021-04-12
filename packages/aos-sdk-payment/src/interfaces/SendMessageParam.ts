/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */
import { SendMessageType } from '../types/SendMessageType';

export interface SendMessageParam {
  type: SendMessageType;
  payload: Record<string, unknown>;
}
