import { InitializeOptions } from '@allofshop/aos-sdk-nodejs-lite';

export interface ConfigInterface extends InitializeOptions {
  mode: 'PRODUCTION' | 'DEVELOPMENT';
}

const config: ConfigInterface = {
  mode: 'PRODUCTION',
  apiKey: '',
  host: '',
  secret: '',
  shopId: '',
  version: 1,
  authorization: undefined,
};

export default config;
