'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on ARDcore-p2p Module {0}'
};

module.exports = require('ARDcore-lib').errors.extend(spec);
