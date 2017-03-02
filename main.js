'use strict';

require('dotenv').config();
const debug = require('debug')('fireslog:main');
const server = require('./server');

server.listen(process.env.PORT, () => {
  debug('starting server');
  console.log('server up on PORT', process.env.PORT);
});
