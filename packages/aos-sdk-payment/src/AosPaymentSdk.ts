/**
 * @copyright Copyright © 2021 Corretto, Inc. All rights reserved.
 */

import { AOS_IFRAME_ID, WRAPPER_ID_NAME } from './constants';
import { isArray, isUndefined } from './helpers';
import { isHTMLIframeElement } from './helpers/isHTMLIframeElement';
import {
  CommonParam,
  Event,
  InitOption,
  PayParameter,
  PayParameterPayload,
  SendMessageParam,
} from './interfaces';
import { PayResponseErrorCallback, PayResponseSuccessCallback } from './types';

const TARGET_ORIGIN = 'http://localhost:3000';
const DEV = false;

class AosPaymentSdk {
  public readonly commonParams: CommonParam[] = [
    {
      key: 'orderId',
      dataType: 'string',
      defaultValue: undefined,
      required: true,
    },
  ];
  private orderId: string;
  private shopId: string;
  private accessToken: string;

  private payload?: PayParameterPayload;
  private callbackSuccess?: PayResponseSuccessCallback;
  private callbackError?: PayResponseErrorCallback;

  constructor() {
    this.shopId = '';
    this.orderId = '';
    this.accessToken = '';
    this.payload = undefined;
    this.callbackSuccess = undefined;
    this.callbackError = undefined;
  }

  private pgWindowUrl() {
    if (DEV) {
      return ``;
    }
    return `https://payment-${this.shopId}.thebackpack.io/${this.orderId}`;
  }

  public init(options: InitOption) {
    this.shopId = options.shopId;
    this.accessToken = options.accessToken;

    window.document.body.innerHTML += `<div id="${WRAPPER_ID_NAME}"></div>`;
    window.addEventListener(
      'message',
      (event: Event) => {
        if (!event.data.type) {
          return;
        }

        const payload = event.data.payload;
        switch (event.data.type) {
          case 'onloaded':
            if (payload.errorMessage) {
              if (this.callbackError) {
                this.callbackError({
                  message: payload.errorMessage,
                  code: payload.errorCode,
                });
              }
              return;
            }
            this.sendMessage({
              type: 'init',
              payload: {},
            });
            break;
          case 'billed':
            if (this.callbackSuccess) {
              this.callbackSuccess(payload);
            }
            break;
          case 'error':
            const err = payload;
            alert('[client]' + err.message);
            break;
          case 'canceled':
            if (this.callbackError) {
              this.callbackError({
                message: payload.errorMessage,
                code: payload.errorCode,
              });
            }
            break;
          default:
            break;
        }
      },
      false,
    );
  }

  public sendMessage(message: SendMessageParam, src?: Window) {
    const iframeDom = window.document.getElementById(AOS_IFRAME_ID);

    if (!isHTMLIframeElement(iframeDom)) {
      return;
    }

    const sender = src ? src : iframeDom.contentWindow;

    if (!sender) {
      return;
    }

    sender.postMessage(message, TARGET_ORIGIN);
  }

  public validate(payload: PayParameterPayload) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.commonParams.length; i++) {
      const key = this.commonParams[i].key;
      const dataType = this.commonParams[i].dataType;
      const defaultValue = this.commonParams[i].defaultValue;
      const required = this.commonParams[i].required;

      // 해당 키가 안 온 경우
      if (payload[key] === undefined) {
        // 필요 값이 아닌 경우
        if (!required) {
          continue;
        }

        if (isUndefined(defaultValue)) {
          return false;
        }

        payload[key] = defaultValue as never;
      }

      // 해당 값이 자료형에 부합하지 않는 경우
      if (typeof payload[key] !== dataType) {
        // 페이로드가 배열이 아닌경우
        if (!isArray(payload[key])) {
          return false;
        }

        // 배열의 경우 정의한 값이기 때문에 다를 수 있다.
        if (dataType !== 'array-integer') {
          return false;
        }
      }
    }

    return true;
  }

  public validateParams(params: PayParameterPayload) {
    if (isUndefined(params)) {
      return false;
    }
    return true;
  }

  public validateRequireField(params: PayParameterPayload) {
    if (isUndefined(params)) {
      return false;
    }
    return true;
  }

  public pay(params: PayParameter) {
    const wrapperDom: HTMLElement | null = window.document.getElementById(
      WRAPPER_ID_NAME,
    );

    if (!wrapperDom) {
      alert('Wrapper 초기화에 실패하였습니다.');
      return;
    }

    this.payload = params.payload;

    if (params.onSuccess) {
      this.callbackSuccess = params.onSuccess;
    }

    if (params.onError) {
      this.callbackError = params.onError;
    }

    if (!this.validate(params.payload)) {
      alert('잘못된 파라미터가 전달되었습니다.');
      return;
    }

    const param = encodeURIComponent(JSON.stringify(this.payload));

    wrapperDom.innerHTML += `<iframe src="${this.pgWindowUrl()}?param=${param}"
      width="100%"
      height="100%"
      frameborder="0"
      id="${AOS_IFRAME_ID}"
      class="${AOS_IFRAME_ID}"
      style="position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      width: 100%;
      height: 100%;"></iframe>`;
  }
}

export default AosPaymentSdk;
