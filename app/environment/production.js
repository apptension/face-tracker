import defaultsDeep from 'lodash/defaultsDeep';

import base from './base';

export default defaultsDeep({
  name: 'production',
  basePath: '/face-tracker',
}, base);
