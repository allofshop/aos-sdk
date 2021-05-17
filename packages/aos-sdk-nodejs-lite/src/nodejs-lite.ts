import axios, { AxiosResponse } from 'axios';

export interface InitializeOptions {
  host: string;
  version: number;
  apiKey: string;
  secret: string;
  shopId: string;
  authorization?: string;
}

interface Headers {
  'x-aos-signature': string;
  'content-type': string;
  Authorization?: string;
}

type BodyDict = {
  [key: string]: string | number | boolean | Date | BodyDict | any[];
};
type QueryDict = {
  [key: string]: string | number | boolean | Date | QueryDict | any[];
};

interface DataType {
  body?: BodyDict;
  query?: QueryDict;
  formData?: FormData;
}

type ContentType = 'json' | 'formdata';
interface RequestOption {
  content: ContentType;
}

let globalOption: InitializeOptions;

export function initialize(options: InitializeOptions) {
  if (typeof options !== 'object') {
    throw new Error('');
  }

  globalOption.apiKey = options.apiKey;
  globalOption.host = options.host;
  globalOption.secret = options.secret;
  globalOption.shopId = options.shopId;
  globalOption.version = options.version;
  if (options.authorization) {
    globalOption.authorization = options.authorization;
  }
}

/**
 *
 * @param token accesstoken
 */
export function setAuthorization(token: string) {
  globalOption.authorization = token;
}

export interface AllOfShopResponse<T> {
  data: T;
}

export async function request<ResponseType>(
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  path: string,
  options: RequestOption = {
    content: 'json',
  },
  data?: DataType
): Promise<AllOfShopResponse<ResponseType>> {
  if (path[0] === '/') {
    path = path.slice(1);
  }
  let realPath = `${globalOption.host}/api/v${globalOption.version}/shops/${globalOption.shopId}/${path}`;
  let bodyData = {};
  if (data !== undefined) {
    if (typeof data !== 'object') {
      throw new Error('');
    }
    if (data.query !== undefined) {
      realPath += '?';
      for (const key in data.query) {
        realPath += `${key}=${data.query[key]}&`;
      }
      realPath = realPath.slice(0, realPath.length - 1);
    }

    if (options.content === 'json' && data.body !== undefined) {
      bodyData = data.body;
    }

    if (options.content === 'formdata' && data.formData !== undefined) {
      bodyData = data.formData;
    }
  }

  const headers: Headers = {
    'x-aos-signature': globalOption.shopId,
    'content-type': 'application/json',
  };

  if (options.content === 'formdata') {
    headers['content-type'] = 'multipart/form-data';
  }

  if (globalOption.authorization) {
    headers.Authorization = `Bearer ${globalOption.authorization}`;
  }

  const response: AxiosResponse<AllOfShopResponse<ResponseType>> = await axios({
    method,
    url: realPath,
    headers,
    data: bodyData,
  });

  return response.data;
}
