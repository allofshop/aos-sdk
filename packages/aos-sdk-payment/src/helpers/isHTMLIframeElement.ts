/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isHTMLIframeElement(value: any): value is HTMLIFrameElement {
  return value && value.contentWindow !== undefined;
}
