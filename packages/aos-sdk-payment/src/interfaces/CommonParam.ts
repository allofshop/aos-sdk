import { PayParameterPayload } from './PayParameter';

/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */
export interface CommonParam {
  key: keyof PayParameterPayload;
  dataType: string;
  defaultValue: string | number | boolean | undefined;
  required: boolean;
}
