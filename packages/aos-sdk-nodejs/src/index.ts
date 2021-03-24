import { initialize } from '@allofshop/aos-sdk-nodejs-lite';

import * as Auth from './auth';
import * as Board from './board';
import * as Catalog from './catalog';
import * as Cms from './cms';
import Config, { ConfigInterface } from './config';
import * as Promotion from './promotion';
import * as Review from './review';
import * as Sales from './sales';
import * as User from './user';

export default {
  Auth,
  Board,
  Catalog,
  Cms,
  Promotion,
  Review,
  Sales,
  User,
  setConfig: (config: ConfigInterface ) => {
    Object.assign(Config, config);
    initialize({
      ...config,
    })
  },
  getConfig: () => Config.mode,
}