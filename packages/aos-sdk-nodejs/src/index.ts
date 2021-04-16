import { initialize, setAuthorization } from '@allofshop/aos-sdk-nodejs-lite';

import * as Auth from './auth';
import * as Board from './board';
import * as Catalog from './catalog';
import * as Cms from './cms';
import Config, { ConfigInterface } from './config';
import * as Core from './core';
import * as Promotion from './promotion';
import * as Review from './review';
import * as Sales from './sales';
import * as System from './system';
import * as User from './user';

export default {
  Auth,
  Board,
  Catalog,
  Cms,
  Core,
  Promotion,
  Review,
  Sales,
  System,
  User,
  setConfig: (config: ConfigInterface) => {
    Object.assign(Config, config);
    initialize({
      ...config,
    });
  },
  setAuthorization,
  getConfig: () => Config,
};
