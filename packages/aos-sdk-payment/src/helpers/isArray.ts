/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */

export function isArray(value: any) {
  return Object.prototype.toString.call(value) === '[object Array]';
}
