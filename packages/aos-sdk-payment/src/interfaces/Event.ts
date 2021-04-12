/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */

import { EventType } from '../types/EventType';

export interface EventData {
  type: EventType;
  payload: any;
}

export interface Event {
  data: EventData;
}
